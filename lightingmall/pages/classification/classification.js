var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      start:[{
          image:'http://kaibei.shenmikj.com/H5/image/tab/start.png'
      }],
      chou: [{
          image: 'http://kaibei.shenmikj.com/H5/image/tab/chou.png'
      }],
      xin: [{
          image: 'http://kaibei.shenmikj.com/H5/image/tab/xin.png'
      }],
      tong:[{
          image:'http://kaibei.shenmikj.com/H5/image/tab/tong.png'
      }],
      rouimg:[{
          image: 'http://kaibei.shenmikj.com/H5/image/banner.jpg'
      }],
      boShow: [{
          image: 'http://kaibei.shenmikj.com/H5/image/magical.jpg'
      }
      ],
      menuTapCurrent: true,
      menuTapCurrent: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },

    // 跳转
  router:function(){
    wx.navigateTo({
      url: '../routerdetail/routerdetail',
    })
  },


    menuTap: function (e) {
        var current = e.currentTarget.dataset.current;//获取到绑定的数据
        //改变menuTapCurrent的值为当前选中的menu所绑定的数据
        this.setData({
            menuTapCurrent: current
        });
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