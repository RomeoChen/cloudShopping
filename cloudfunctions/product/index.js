// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const MAX_LIMIT = 100

// 云函数入口函数
exports.main = async (event, context) => {
    // 先取出集合记录总数
    const product = await db.collection('product').count()
    const total = product.total
    // 计算需分几次取
    const batchTimes = Math.ceil(total / 100)
    // 承载所有读操作的 promise 的数组
    const tasks = []
    for (let i = 0; i < batchTimes; i++) {
        const promise = db.collection('product').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
        tasks.push(promise)
    }
    // 等待所有
    return (await Promise.all(tasks)).reduce((arr, cur) => {
        return {
            data: acc.data.concat(cur.data),
            errMsg: arr.errMsg,
        }
    })
}