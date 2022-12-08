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
    nickName: '',
  },
  getUserInfo() {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
          hasUserInfo: true
        })
        wx.setStorageSync('userLogo', res.userInfo.avatarUrl)
        wx.setStorageSync('userName', res.userInfo.nickName)
        console.log(res.userInfo.nickName, 88)
        console.log(res.userInfo.avatarUrl, 18)
      }
    })
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
  var name = wx.getStorageSync('userName')
  this.setData({
    avatarUrl: logo,
    nickName: name,
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