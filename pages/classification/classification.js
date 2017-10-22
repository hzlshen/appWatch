var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        park: [],
        rigpark: [],
        parkban: [], 
        server: [], 
        isShow: true,
        currentTab: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
        var that = this;
        wx.request({
            url: 'https://jisu.shenmikj.com/tour/mbone/index.php/api/index/guide',
            success:function(res){
                that.setData({
                    park: res.data.data,
                })
                var param = {};
                for (var i = 0; i < res.data.data.length; i++) {
                    var string1 = "park[" + i + "].num";
                    param[string1] = i;
                }
                that.setData(param)
                that.setData({
                    currentTab: that.data.park[0].num
                })
            }
        })


    },
    // 滑动切换tab 
    // bindChange: function (e) {
    //     var that = this;
    //     that.setData({ currentTab: e.detail.current });
    // },
    // 点击tab切换 
    swichNav: function (e) {
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            var showMode = e.target.dataset.current == 0;
            this.setData({
                currentTab: e.target.dataset.current,
                isShow: showMode
            })
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})