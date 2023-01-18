// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbTitle: '首页',
    // nbLoading: false,
    nbFrontColor: '#ffffff',
    nbBackgroundColor: '#000000',
    disabled: false,
    theme: "dark",
    text: "",
    number: 0,
    isshow: false,
  },

  onPopup() {
    this.setData({
      isshow: true,
    })
    console.log(this.data.isshow);
  },
  hidePopop(e) {
    console.log(e.detail) // 自定义组件触发事件时提供的detail对象
    console.log('父组件：我接受到了子组件的关闭弹窗的通知！');
    this.setData({
      isshow: false,
    })
    console.log(11112333);
  },
  onNewPages() {
    wx.navigateTo({
      url: '/pages/components/newPages/newPages',
    })
    console.log(1);
  },
  onBtn() {
    const that = this
    this.setData({
      theme: "light"
    })
    console.log(that.data.theme);
    // const that = this
    // console.log(wx.env.USER_DATA_PATH);
    // console.log(wx.canIUse('onBtn'));
  },
  onBtn1() {
    var that = this
    wx.request({
      url: 'http://localhost:3000/',
      success(res) {
        console.log(res.data, 89)
        that.setData({
          text: res.data
        })
      }
    })
    
    // wx.navigateTo({
    //   url: '/pages/new/new'
    // })
    // var iphone  = wx.getAppAuthorizeSetting();
    // iphone.phoneCalendarAuthorized
    // console.log(iphone.phoneCalendarAuthorized);
    // wx.getRendererUserAgent().then(userAgent=> {console.log(userAgent);})
    // const appBaseInfo = wx.getAppBaseInfo()
    // console.log(appBaseInfo.language);
    // wx.getSystemInfoAsync({
    //   success(res){
    //     console.log(res);
    //   }
    // })
    // const iphone13 = wx.getSystemSetting()
    // console.log(iphone13.bluetoothEnabled);
    // console.log(iphone13.locationEnabled);
    // console.log(iphone13.	wifiEnabled);
    // if(iphone13.bluetoothEnabled === false) {
    //   console.log("请打开蓝牙");
    // }
    // wx.getSystemSetting(bluetoothEnabled)
    // wx.openAppAuthorizeSetting({
    //   success(res) {
    //     console.log(res);
    //   }
    // })
    // const windowInfo = wx.getWindowInfo()
    // console.log(windowInfo.statusBarHeight, 8);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onPageNotFound() {
    console.log("404");
  },
  onLoad() {
    const that = this
    // wx.onPageNotFound(that.onBtn1)
    wx.onPageNotFound((result) => {
      console.log(result, 88);
    })
    that.onBtn1
    // const that = this
    // wx.onThemeChange(that.onBtn) 
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