//index.js
//获取应用实例
var app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    awardsList: {},
    userInfo: {},
    time: []
  },
  //事件处理函数
  gotoLottery: function() {
    wx.switchTab({
      url: '../index/index'
    })
  },
  // 这里改成onShow 因为onLoad只调用一次
  onShow: function () {
    this.setData({
      time: util.formatTime(new Date())
    })
    if(this.data.time) {
      this.setData({
        subTime: this.data.time.substring(0,10)
      })
    }
    if(wx.getStorageSync('dateTime')) {
      if(wx.getStorageSync('dateTime') !== this.data.subTime) {
        wx.clearStorage()
      }
    } else {
      wx.setStorageSync('dateTime', this.data.subTime)
    }

    var that = this
    // 同步获取指定缓存的数据
    var list = wx.getStorageSync('winAwards') || {data:[]}

    if (list && list.data && list.data.length > 0) {
      list = list.data
    }else {
      list = []
    }

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        awardsList: list || []
      })
    })
  }
})
