// components/cc-classify/cc-classify.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    active: {
      // 类型
      type: '',
      // 作者
      author: '',
      // 朝代
      dynasty: '',
      // 形式
      pattern: ''
    },
    // 类型
    type: [],
    // 作者
    author: [],
    // 朝代
    dynasty: [],
    // 形式
    pattern: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      let codyType = require('../../static/js/codyType')
      this.setData({
        ...codyType.default,
      })
    },
    clickQuery() {
      this.triggerEvent('query', {
        ...this.data.active
      })
    },
    clickTag(e) {
      let {key, value} = e.target.dataset
      value = this.data.active[key] === value ? '' : value
      this.setData({
        ['active.' + key]: value
      })
    }
  },
  attached() {
    this.init()
  }
})
