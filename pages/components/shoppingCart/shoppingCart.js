// pages/components/popup/popup.js

Component({
  properties: {
    show: {
      type:Boolean,
    }
  },
  data: {
    background: "",
    img:"/pages/state/icon/1.png",
    water:"农夫山泉19L",
    money:"￥30",
    array: []
    //   {
    //     index: 1,
    //     lable: "农夫山泉19L",
    //     title: "水票2张",
    //   },
    //   {
    //     index: 2,
    //     lable: "恒大冰泉19L",
    //     title: "水票1张",
    //   },
    //   {
    //     index: 3,
    //     lable: "纯悦19L",
    //     title: "水票2张",
    //   },
    //   {
    //     index: 4,
    //     lable: "纯悦19L",
    //     title: "水票2张",
    //   },
    //   {
    //     index: 5,
    //     lable: "纯悦19L",
    //     title: "水票2张",
    //   },
    //   {
    //     index: 6,
    //     lable: "纯悦19L",
    //     title: "水票2张",
    //   },
    //   {
    //     index: 7,
    //     lable: "纯悦19L",
    //     title: "水票2张",
    //   },
    //   {
    //     index: 8,
    //     lable: "纯悦19L",
    //     title: "水票2张",
    //   },
    //   {
    //     index: 9,
    //     lable: "纯悦19L111",
    //     title: "水票2张",
    //   },
    //   {
    //     lable: "纯悦19L",
    //     title: "水票2张",
    //   },
    //   {
    //     lable: "纯悦19L",
    //     title: "水票2张",
    //   },
    //   {
    //     lable: "纯悦219L",
    //     title: "水票2张",
    //   },
    // ]
  },
  methods: {
    onSelect(e) {
      console.log(e.currentTarget.dataset.key.index);
      this.setData({
        water: e.currentTarget.dataset.key.lable,
      })
      // if (e.currentTarget.dataset.key.index ==1) {
      //   this.setData({

      //   })
      // }
      
     
   
    },
    showPopup() {
      // this.isshow = true
      this.setData({
        show:true
      })
      console.log(1111);
    },
    closePopup(){
      // var myEventDetail = {} // detail对象，提供给事件监听函数
      // var myEventOption = {} // 触发事件的选项
      console.log(`子组件：'向父组件发送通知，我要关闭弹窗'`)
      this.triggerEvent('hidepopop')
    },
    onSubmit() {
      this.setData({
        show:false
      })
    }
  },
});


//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {
//     console.log(this.isshow);
//     this.triggerEvent("close")
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

