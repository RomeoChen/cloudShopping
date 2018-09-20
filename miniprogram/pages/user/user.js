// pages/user/user.js

const UNPROMTED = 0
const UNAUTHORIZED = 1
const AUTHORIZED = 2

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: null,
        locationAuthType : UNPROMTED
    },

    /**
     * 点击“收货地址”
     */
    onTapAddress() {
        wx.showToast({
            icon: 'none',
            title: '此功能暂未开放'
        })
    },

    /**
     * 点击“联系客服”
     */
    onTapKf() {
        wx.showToast({
            icon: 'none',
            title: '此功能暂未开放'
        })
    },

    /**
     * 点击“登录”
     */
    onTapLogin: function(e) {
        console.log(e)
        wx.getSetting({
            success: res => {
                console.log(res)
                if (res.authSetting['scope.userInfo'] === false) {
                    this.setData({
                        locationAuthType: UNAUTHORIZED
                    })
                    // 已拒绝授权
                    wx.showModal({
                        title: '提示',
                        content: '请授权来获取您的用户信息',
                        showCancel: false
                    })
                } else {
                    this.setData({
                        locationAuthType: AUTHORIZED,
                        userInfo: e.detail.userInfo
                    })
                }
            },
            fail: () => {
                error && error()
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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