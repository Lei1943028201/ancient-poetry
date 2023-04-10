interface codeList {
  code: string,
  value: string
}

interface codyType {
  type: Array<codeList>,
  // 作者
  author: Array<codeList>,
  // 朝代
  dynasty: Array<codeList>,
  // 形式
  pattern: Array<codeList>
}

const type: Array<codeList> = [
  { code: '0', value: '唐诗三百' },
  { code: '1', value: '古诗三百' },
  { code: '2', value: '宋词三百' },
  { code: '3', value: '小学古诗' },
  { code: '4', value: '初中古诗' },
  { code: '5', value: '高中古诗' },
  { code: '6', value: '小学文言' },
  { code: '7', value: '初中文言' },
  { code: '8', value: '高中文言' },
  { code: '9', value: '宋词精选' },
  { code: '10', value: '古诗十九' },
  { code: '11', value: '诗经' },
  { code: '12', value: '楚辞' },
  { code: '13', value: '乐府' },
  { code: '14', value: '写景' },
  { code: '15', value: '咏物' },
  { code: '16', value: '春天' },
  { code: '17', value: '夏天' },
  { code: '18', value: '秋天' },
  { code: '19', value: '冬天' },
  { code: '20', value: '写雨' },
  { code: '21', value: '写雪' },
  { code: '22', value: '写风' },
  { code: '23', value: '写花' },
  { code: '24', value: '梅花' },
  { code: '25', value: '荷花' },
  { code: '26', value: '菊花' },
  { code: '27', value: '柳树' },
  { code: '28', value: '月亮' },
  { code: '29', value: '山水' },
  { code: '30', value: '写山' },
  { code: '31', value: '写水' },
  { code: '32', value: '长江' },
  { code: '33', value: '黄河' },
  { code: '34', value: '儿童' },
  { code: '35', value: '写鸟' },
  { code: '36', value: '写马' },
  { code: '37', value: '田园' },
  { code: '38', value: '边塞' },
  { code: '39', value: '地名' },
  { code: '40', value: '节日' },
  { code: '41', value: '春节' },
  { code: '42', value: '元宵' },
  { code: '43', value: '寒食' },
  { code: '44', value: '清明' },
  { code: '45', value: '端午' },
  { code: '46', value: '七夕' },
  { code: '47', value: '中秋' },
  { code: '48', value: '重阳' },
  { code: '49', value: '怀古' },
  { code: '50', value: '抒情' },
  { code: '51', value: '爱国' },
  { code: '52', value: '离别' },
  { code: '53', value: '送别' },
  { code: '54', value: '思乡' },
  { code: '55', value: '思念' },
  { code: '56', value: '爱情' },
  { code: '57', value: '励志' },
  { code: '58', value: '哲理' },
  { code: '59', value: '闺怨' },
  { code: '60', value: '悼亡' },
  { code: '61', value: '写人' },
  { code: '62', value: '老师' },
  { code: '63', value: '母亲' },
  { code: '64', value: '友情' },
  { code: '65', value: '战争' },
  { code: '66', value: '读书' },
  { code: '67', value: '惜时' },
  { code: '68', value: '忧民' },
  { code: '69', value: '婉约' },
  { code: '70', value: '豪放' },
  { code: '71', value: '民谣' }
]

const author: Array<codeList> = [
  {
    code: '1',
    value: '李白'
  },
  {
    code: '2',
    value: '杜甫'
  },
  {
    code: '3',
    value: '苏轼'
  },
  {
    code: '4',
    value: '王维'
  },
  {
    code: '5',
    value: '杜牧'
  },
  {
    code: '6',
    value: '陆游'
  },
  {
    code: '7',
    value: '李煜'
  },
  {
    code: '8',
    value: '元稹'
  },
  {
    code: '9',
    value: '韩愈'
  },
  {
    code: '10',
    value: '岑参'
  },
  {
    code: '11',
    value: '齐己'
  },
  {
    code: '12',
    value: '贾岛'
  },
  {
    code: '13',
    value: '柳永'
  },
  {
    code: '14',
    value: '曹操'
  },
  {
    code: '15',
    value: '李贺'
  },
  {
    code: '16',
    value: '曹植'
  },
  {
    code: '17',
    value: '张籍'
  },
  {
    code: '18',
    value: '孟郊'
  },
  {
    code: '19',
    value: '皎然'
  },
  {
    code: '20',
    value: '许浑'
  },
  {
    code: '21',
    value: '罗隐'
  },
  {
    code: '22',
    value: '贯休'
  },
  {
    code: '23',
    value: '韦庄'
  },
  {
    code: '24',
    value: '屈原'
  },
  {
    code: '25',
    value: '王勃'
  },
  {
    code: '26',
    value: '张祜'
  },
  {
    code: '27',
    value: '王建'
  },
  {
    code: '28',
    value: '晏殊'
  },
  {
    code: '29',
    value: '岳飞'
  },
  {
    code: '30',
    value: '姚合'
  },
  {
    code: '31',
    value: '卢纶'
  },
  {
    code: '32',
    value: '秦观'
  },
  {
    code: '33',
    value: '钱起'
  },
  {
    code: '34',
    value: '朱熹'
  },
  {
    code: '35',
    value: '韩偓'
  },
  {
    code: '36',
    value: '高适'
  },
  {
    code: '37',
    value: '方干'
  },
  {
    code: '38',
    value: '李峤'
  },
  {
    code: '39',
    value: '赵嘏'
  },
  {
    code: '40',
    value: '贺铸'
  },
  {
    code: '41',
    value: '郑谷'
  },
  {
    code: '42',
    value: '郑燮'
  },
  {
    code: '43',
    value: '张说'
  },
  {
    code: '44',
    value: '张炎'
  },
  {
    code: '45',
    value: '白居易'
  },
  {
    code: '46',
    value: '辛弃疾'
  },
  {
    code: '47',
    value: '李清照'
  },
  {
    code: '48',
    value: '刘禹锡'
  },
  {
    code: '49',
    value: '李商隐'
  },
  {
    code: '50',
    value: '陶渊明'
  },
  {
    code: '51',
    value: '孟浩然'
  },
  {
    code: '52',
    value: '柳宗元'
  },
  {
    code: '53',
    value: '王安石'
  },
  {
    code: '54',
    value: '欧阳修'
  },
  {
    code: '55',
    value: '韦应物'
  },
  {
    code: '56',
    value: '温庭筠'
  },
  {
    code: '57',
    value: '刘长卿'
  },
  {
    code: '58',
    value: '王昌龄'
  },
  {
    code: '59',
    value: '杨万里'
  },
  {
    code: '60',
    value: '诸葛亮'
  },
  {
    code: '61',
    value: '范仲淹'
  },
  {
    code: '62',
    value: '陆龟蒙'
  },
  {
    code: '63',
    value: '晏几道'
  },
  {
    code: '64',
    value: '周邦彦'
  },
  {
    code: '65',
    value: '杜荀鹤'
  },
  {
    code: '66',
    value: '吴文英'
  },
  {
    code: '67',
    value: '马致远'
  },
  {
    code: '68',
    value: '皮日休'
  },
  {
    code: '69',
    value: '左丘明'
  },
  {
    code: '70',
    value: '张九龄'
  },
  {
    code: '71',
    value: '权德舆'
  },
  {
    code: '72',
    value: '黄庭坚'
  },
  {
    code: '73',
    value: '司马迁'
  },
  {
    code: '74',
    value: '皇甫冉'
  },
  {
    code: '75',
    value: '卓文君'
  },
  {
    code: '76',
    value: '文天祥'
  },
  {
    code: '77',
    value: '刘辰翁'
  },
  {
    code: '78',
    value: '陈子昂'
  },
  {
    code: '79',
    value: '纳兰性德'
  },
  {
    code: '80',
    value: '王之涣'
  },
]

const dynasty: Array<codeList> = [
  {
    code: '1',
    value: '先秦'
  },
  {
    code: '2',
    value: '两汉'
  },
  {
    code: '3',
    value: '魏晋'
  },
  {
    code: '4',
    value: '南北朝'
  },
  {
    code: '5',
    value: '隋'
  },
  {
    code: '6',
    value: '唐'
  },
  {
    code: '7',
    value: '五代'
  },
  {
    code: '8',
    value: '宋'
  },
  {
    code: '9',
    value: '金'
  },
  {
    code: '10',
    value: '元'
  },
  {
    code: '11',
    value: '明'
  },
  {
    code: '12',
    value: '清'
  },
]

const pattern: Array<codeList> = [
  {
    code: '1',
    value: '诗'
  },
  {
    code: '2',
    value: '词'
  },
  {
    code: '3',
    value: '曲'
  },
  {
    code: '4',
    value: '文言文'
  }
]

const codeType: codyType = {
  type,
  // 作者
  author,
  // 朝代
  dynasty,
  // 形式
  pattern
}

export default codeType