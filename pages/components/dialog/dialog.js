Component({
  option: {
    multipleSlots: true,
  },
  properties: {
    title: {
      type: String,
      value: "收货地址"
    },
  },
  data: {
    flag: true,
    isShow: false,
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  methods: {
    bindRegionChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    },
    onPopup() {
      this.setData({
        isShow: true,
      })
    },
    hidePopup() {
      this.setData({
        flag: !this.data.flag,
      })
    },
    showPopup() {
      this.setData({
        flag: !this.data.flag
      })
    },
    _error() {
      this.triggerEvent("error")
    },
    _success() {
      this.triggerEvent("success")
    },
    // showPopup(type) {
    //   this.setData({
    //     show: true
    //    })
    // },
    closePopup(type) {
      this.setData({
        isShow: false
      })
    }
  }
})