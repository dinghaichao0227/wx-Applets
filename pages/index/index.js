// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    nbTitle: '商场',
    nbFrontColor: '#ffffff',
    nbBackgroundColor: '#000000',
    array:[
      {
        id: 1,
        name: '农夫山泉'
      },
      {
        id: 2,
        name: '纯悦山泉'
      },
      {
        id: 3,
        name: '白翠珊山泉'
      },
      
      {
        id: 4,
        name: '老白干山泉'
      }
    ],
    currentCampus: 0,
    content: 1,
    name: "农夫山泉",
    label: "农夫山泉农夫山泉农夫山泉农夫山泉农夫山泉12L",
    money: "￥123.00",
    color: "",
    isshow: false,
    show: false,
  },
  onItemName(e) {
    console.log(e.currentTarget.dataset.key.name);
    console.log(e.currentTarget.dataset.key.id, 3232);
    var id = e.currentTarget.dataset.key.id
    this.setData({
      currentCampus: id
    })
    if (e.currentTarget.dataset.key.id == 1) {
      this.setData({
        content: 1,
      })
    }else if(e.currentTarget.dataset.key.id != 1) {
      this.setData({
        content: null,
      })
    }
  },
  onPupup() {
    this.setData({
      isshow: true,
    })
  },
  hidePopop(e) {
    console.log(e.detail) // 自定义组件触发事件时提供的detail对象
    console.log('父组件：我接受到了子组件的关闭弹窗的通知！');
    this.setData({
      isshow: false,

    })
    console.log(11112333);
  },
  hidePopops(e) {
    console.log(e.detail) // 自定义组件触发事件时提供的detail对象
    console.log('父组件：我接受到了子组件的关闭弹窗的通知！');
    this.setData({
      show: false
    })
    console.log(88888);
  },
  onIcon() {
    this.setData({
      show: true,
    })
    console.log(234);
  },
  onLoad() {
    this.setData({
      currentCampus: 1
    })
  }
})
