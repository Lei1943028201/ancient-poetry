// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    active: 'home',
    originalAncientPoetryList: [],
    ancientPoetryList: [],
    query: {
      // 类型
      type: '',
      // 作者
      author: '',
      // 朝代
      dynasty: '',
      // 形式
      pattern: ''
    },
    pageNo: 1,
    pageSize: 10
  },
  scroll(e) {
    this.updataList()
  },
  getAncientPoetry(title: string) {
    for (let index = 0; index < this.data.ancientPoetryList.length; index++) {
      const ancientPoetry = this.data.ancientPoetryList[index]
      if (ancientPoetry.title === title) {
        return ancientPoetry
      }
    }
    return false
  },
  clickListCard(e) {
    let data = this.getAncientPoetry(e.target.dataset.title)
    wx.navigateTo({
      url: `../detail/detail`,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {data})
      }
    })
  },
  clickQuery(e) {
    this.setData({
      pageNo: 1,
      query: e.detail,
      ancientPoetryList: []
    })
    this.initData()
  },
  initData(){
    let ancientPoetry = require('../../static/js/ancientPoetry')
    this.setData({
      originalAncientPoetryList: ancientPoetry.default.filter(item=>{
        let result = true
        const { author, dynasty} = this.data.query
        if(author && item.name !== author){
          result = false
        }
        if(dynasty && item.dynasty !== dynasty){
          result = false
        }

        return result
      }),
    })
    this.updataList()
  },

  updataList() {
    let {pageSize, pageNo} = this.data
    let result = this.data.originalAncientPoetryList.slice( (pageNo - 1)* pageSize, pageNo * pageSize)
    let arr = this.data.ancientPoetryList.concat(result)
    this.setData({
      pageNo: pageNo + 1,
      ancientPoetryList: arr
    })
  },
  onLoad() {
    this.initData()
  }
})
