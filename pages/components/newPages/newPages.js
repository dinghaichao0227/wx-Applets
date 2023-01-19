// pages/components/newPages/newPages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    name: "丁艳春",
    phone: 15142257040,
    address: "三环新城7号院7号4单元2703"
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
    // this.setData({
    //   name: " ",
    // })
    // var that = this;
    // that.data.name == " " ? that.data.name="丁海超" : ""
  },
  editPopup() {
    this.popup.editPopup();
    // this.setData({
    //   name: '丁艳春',
    //   phone: 15142257040,
    // })
    console.log(11);
  },
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  _success(e) {
    console.log('你点击了确定');
    this.popup.hidePopup();
    console.log(e);
    this.setData({
      name: e.detail.onName,
      phone: e.detail.onPhone,
      address: e.detail.onAddress
    })
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