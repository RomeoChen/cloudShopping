// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        product: {
            _id: "W590dbOVH2exDS6f",
            image: 'cloud://product1.jpg',
            name: '钱包',
            price: 196,
            source: '国内·广东'
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getProduct(options.id)
    },

    getProduct(id) {
        wx.showLoading({
            title: '商品数据加载中',
        })
        wx.cloud.callFunction({
            name: 'detail',
            data: {
                id: id,
            },
            success: res => {
                wx.hideLoading()
                console.log(res.result.data)
                this.setData({
                    product: res.result.data
                })
            },
            fail: () => {
                wx.hideLoading()
                console.error
                setTimeout(() => {
                    wx.navigateBack()
                }, 2000)
            } 
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})