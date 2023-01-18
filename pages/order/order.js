// pages/order/order.js
// pages/new.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    border1: '',
    border2: '',
    border3: '',
    border4: '',
    paying: null,
    noTable: null
  },
  onSubmit1() {
    const that = this
    this.setData ({
      border1:'2px solid red'
    })
    if(that.data.border1 !== '') {
      this.setData ({
        border2: '',
        border3: '',
        border4: '',
        paying: null,
        noTable: null
      })
    }
    console.log(11);
  },
  onSubmit2() {
    const that = this
    this.setData ({
      border2:'2px solid red'
    })
    if(that.data.border2 !== '') {
      this.setData ({
        border1: '',
        border3: '',
        border4: '',
        paying: null,
        noTable: null
      })
    }
    console.log(22);
  },
  onSubmit3() {
    const that = this
    this.setData ({
      border3:'2px solid red'
    })
    if(that.data.border3 !== '') {
      this.setData ({
        border2: '',
        border1: '',
        border4: '',
        paying: null,
        noTable: null
      })
    }
    console.log(33);
  },
  onSubmit4() {
    const that = this
    this.setData ({
      border4:'5rpx solid red'
    })
    if(that.data.border4 !== '') {
      this.setData ({
        border2: '',
        border3: '',
        border1: '',
        paying: 4,
        noTable: 4
      })
    }
    console.log(14);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.id);
    if(options.id == 1) {
      this.onSubmit1()
    }
    if(options.id == 2) {
      this.onSubmit2()
    }
    if(options.id == 3) {
      this.onSubmit3()
    }
    if(options.id == 4) {
      this.setData({
        paying: options.id
      })
      this.onSubmit4()
    }
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
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   }
// })