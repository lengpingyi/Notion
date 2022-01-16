const BLOG = {
  title: '图什自留地', // 站点标题
  description: '分享、记录、探索。', // 站点描述
  author: 'Lengpingyi', // 作者
  bio: '冷静、平凡、唯一。', // 作者简介
  email: 'lengpingyi@gmail.com', // 联系邮箱
  // link: 'https://tangly1024.com', // 网站地址
  keywords: ['Notion', '写作', '博客'], // 网站关键词
  home: { // 首页
    showHomeBanner: false, // 首页是否显示大图及标语 [true,false]
    homeBannerStrings: ['Hi，我是一个程序员', 'Hi，我是一个打工人', 'Hi，我是一个干饭人', '欢迎来到我的博客🎉'], // 首页大图标语文字
    homeBannerImage: './bg_image.jpg', // 背景图地址
    showPostCover: false, // 文章列表显示封面图
    showPreview: true, // 列表展示文章预览
    previewLines: 12, // 预览文章的篇幅
    showSummary: false // 显示用户自定义摘要
  },
  lang: 'zh-CN', // ['zh-CN','en-US'] default lang => see /lib/lang.js for more.
  notionPageId: process.env.NOTION_PAGE_ID || '57dc60e128a140b58d3427a82189f63c', // Important page_id！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'font-serif tracking-wider subpixel-antialiased', // 文章字体 ['font-sans', 'font-serif', 'font-mono'] @see https://www.tailwindcss.cn/docs/font-family
  lightBackground: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy in a folder
  since: , // if leave this empty, current year will be used.
  postListStyle: 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  postsPerPage: 6, // post counts per page
  sortByDate: false,
  topNavType: 'fixed', // ['fixed','autoCollapse','normal'] 分别是固定顶部、固定底部滑动时自动折叠，不固定
  menu: { // 菜单栏设置
    showAbout: false, // 显示关于
    showCategory: true, // 显示分类
    showTag: true, // 显示标签
    showArchive: true, // 显示归档
    showSearch: true // 显示搜索
  },
  widget: { // 挂件及组件设置
    showPet: false, // 是否显示宠物挂件
    petLink: 'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
    showToTop: true, // 是否显示回顶
    showToBottom: false, // 显示回底
    showDarkMode: true, // 显示日间/夜间模式切换
    showToc: true, // 移动端显示悬浮目录
    showShareBar: false, // 文章分享功能
    showRelatePosts: true, // 相关文章推荐
    showCopyRight: true, // 文章版权声明
    showLatestPost: true, // 右侧边栏显示最近更新
    showCategoryList: false, // 右侧边栏显示文章分类列表
    showTagList: false // 右侧边栏显示标签分类列表
  },
  socialLink: { // 社交链接，如不需要展示可以留空白，例如 weibo:''
    // weibo: 'https://weibo.com/',
    // twitter: 'https://twitter.com/',
    // github: 'https://github.com/',
    // telegram: 'https://t.me/'
  },
  comment: { // 评论插件，支持 gitalk, utterances, cusdis
    provider: 'cusdis', // 不需要则留空白
      gitalkConfig: {
      repo: 'NotionNext', // The repository of store comments
      owner: 'tangly1024',
      admin: ['tangly1024'],
      clientID: process.env.GITALK_ID || 'be7864a16b693e256f8f',
      clientSecret: process.env.GITALK_SECRET || 'dbd0f6d9ceea8940f6ed20936b415274b8fe66a2',
      distractionFreeMode: false
    },
    cusdisConfig: {
      appId: '96c6e43a-33ad-4622-9579-eaa5cec4cdf6', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    },
      utterancesConfig: {
      repo: 'tangly1024/NotionNext'
    },
    gitter: '', // gitter聊天室
    DaoVoiceId: '', // DaoVoice http://dashboard.daovoice.io/get-started
    TidioId: '' // https://www.tidio.com/
  },
  // --- 高级设置
  analytics: { // 文章访问量统计
    busuanzi: false, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
    provider: '', // 支持 Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    baiduAnalytics: '', // e.g only need xxxxx -> https://hm.baidu.com/hm.js?[xxxxx]
    cnzzAnalytics: '', // 站长统计id only need xxxxxxxx -> https://s9.cnzz.com/z_stat.php?id=[xxxxxxxx]&web_id=[xxxxxxx]
    gaConfig: {
      measurementId: 'G-68EK0W049N' // e.g: G-XXXXXXXXXX
    },
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.tangly1024.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.tangly1024.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    }
  },
  seo: {
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
    googleAdsenseId: '', // 谷歌广告ID
  isProd: process.env.VERCEL_ENV === 'production'// distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
