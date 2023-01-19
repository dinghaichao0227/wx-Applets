const placeArray = [
  {
    "name": "北京",
    "city": [{
      "name": "直辖市",
      "area": ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县"]
    }]
  },

  {
    "name": "天津",
    "city": [
      {
        "name": "天津A",
        "area": ["a区", "b区", "c区", "d区", "e区"]
      },
      {
        "name": "天津B",
        "area": ["1区", "2区", "3区", "4区"]
      }
   ]
  },

  {
    "name": "河北",
    "city": [

      {
        "name": "石家庄",
        "area": ["长安区", "新乐市", "鹿泉市"]
      },

      {
        "name": "邯郸",
        "area": ["邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉  县", "磁  县" ]
      },

      {
        "name": "邢台",
        "area": ["桥东区", "桥西区", "沙河市"]
      },
    ]
  }];
Component({
  option: {
    multipleSlots: true,
  },
  properties: {
    title: {
      type: String,
      value: "收货地址"
    },
    name: {
      type: String,
      value: "丁春"
    },
    phone: {
      type: String,
      value: 1514257040,
    }
  },

  data: {
    inputShow: false,
    boxShow: false,
    placeArray: placeArray,
    province: placeArray[0].name,
    pIndex: 0,
    city: placeArray[0].city[0].name,
    cIndex: 0,
    area: placeArray[0].city[0].area[0],
    aIndex: 0,
    flag: true,
    isShow: false,
    index: 0,
    names: "",
    phone: 1512626729,
    placeholder: "姓名",
    address: "",
    onName: "",
    onPhone: null,
    onAddress: "",
  },
  methods: {
    onName(e){
      console.log(e.detail,99);
      this.setData({
        onName: e.detail.value
      })
    },
    onPhone(e){
      this.setData({
        onPhone: e.detail.value
      })
    },
    onAddress(e) {
      this.setData({
        onAddress: e.detail.value
      })
    },
    changeProvince2(e){
      const val = e.detail.value
      this.setData({
        pIndex: val,
        cIndex: 0,
        aIndex: 0,
        province: placeArray[val].name,
        city: placeArray[val].city[0].name,
        area: placeArray[val].city[0].area[0]
      })
    },
    changeCity2(e) {
      const val = e.detail.value
      this.setData({
        cIndex: val,
        aIndex: 0,
        city: placeArray[this.data.pIndex].city[val].name,
        area: placeArray[this.data.pIndex].city[val].area[0]
      })
      console.log(2233);
    },
    changeArea2(e) {
      const val = e.detail.value
      this.setData({
        aIndex: val,
        area: placeArray[this.data.pIndex].city[this.data.cIndex].area[val]
      })
      console.log(444);
    },
    onClose() {
      this.setData({
        isShow: false
      })
      console.log(111);
    },
    onSubmit() {
      this.setData({
        isShow: false
      })
      var that = this
      var address = [that.data.province, that.data.city,that.data.area]
      var dataCait = address.join().replace(/,/g, " ")
      console.log(dataCait, 2222);
      this.setData({
        address: dataCait
      })
      console.log(that.data.address,90);
      console.log(that.data.province,that.data.city,that.data.area, "api");
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
      console.log(223333);
    },
    showPopup() {
      this.setData({
        flag: !this.data.flag
      })
      this.setData({
        names: " ",
        // placeholder: "姓名"
      })
      var that = this;
      that.data.names == " " ? that.data.placeholder = "姓名" : that.data.placeholder = "姓名"
      console.log(this.properties);
      console.log(6662);
    },
    editPopup() {
      this.setData({
        flag: !this.data.flag
      })
      console.log(this.properties.name, 9090);
      this.setData({
        names: this.properties.name
      })
    },
    _error() {
      this.triggerEvent("error",)
      console.log(22245670101);
      this.setData({
        address: "",
      })
    },
    _success() {
      var that = this;
      var onName = that.data.onName
      var onPhone = that.data.onPhone
      var onAddress = that.data.onAddress
      this.triggerEvent("success",{onName,onPhone,onAddress} )
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