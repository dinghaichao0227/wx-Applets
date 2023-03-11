// pages/components/number/number.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 1,

  },
  add() {
    var that = this;
      this.setData({
        number: that.data.number += 1,
      })
      var addnumber = that.data.number
      this.triggerEvent('addNumer', addnumber)
  },
  reduce() {
    var that = this;
    this.setData({
      number: that.data.number == 1 ? 1 : that.data.number -= 1,
    })
    if (that.data.number == 1) {
      that.data.number == 1
    }
    var reducenumber = that.data.number
    this.triggerEvent('reducenumber', reducenumber)
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