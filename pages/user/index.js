// pages/logs/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nbTitle: '个人中心',
    nbFrontColor: '#ffffff',
    nbBackgroundColor: '#000000',
    avatarUrl: '',
    nickName: '@我还小',
    disabled: false,
    url: ''
  },
  onSubmit1() {
    this.setData({
      url: '/pages/new/new?id=1',
    })
  },
  onSubmit2() {},
  onSubmit3() {},
  onSubmit4() {},
 
  getUserInfo(open) {
    const that = this
        console.log(open);
          this.setData({
            avatarUrl: open.detail.avatarUrl,
          })
          if(that.data.avatarUrl) {
            console.log(that.data.avatarUrl, 10);
            this.setData({
              disabled: true
            })
          }
        wx.setStorageSync('userLogo', open.detail.avatarUrl)
        // console.log(that.data.nickName, 88)
  },
  // onLaunch() {

  // },
  // onPullDownRefresh () {
  //   wx.stopPullDownRefresh()
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  var logo = wx.getStorageSync('userLogo')
  if (logo) {
    this.setData({
      disabled: true
    })
  }
  // var name = wx.getStorageSync('userName')
  this.setData({
    avatarUrl: logo,
    // nickName: name,
  })
    console.log(10);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})