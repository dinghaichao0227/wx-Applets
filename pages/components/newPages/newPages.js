// pages/components/newPages/newPages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
  },
  onDialog() {
    this.setData({
      show: true,
    })
    console.log();
  },
  onClick() {
    this.setData({
      show: false
    })
    console.log("我取消了");
  },
  onClose(){
    this.setData({
      show: false
    })
    console.log("我的调api");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.popup = this.selectComponent("#popup");
  },
  showPopup() {
    this.popup.showPopup();
    console.log(1111);
  },
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  _success() {
    console.log('你点击了确定');
    this.popup.hidePopup();
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