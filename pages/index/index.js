// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    nbTitle: '新手',
    nbFrontColor: '#ffffff',
    nbBackgroundColor: '#000000',
    motto: 'what are you doing',
    count: 232222
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          image: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail);
  },
  onLoad() {
  }
})
