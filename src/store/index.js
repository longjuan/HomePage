import { createStore } from 'vuex'

export default createStore({
  state: {
    searchEngines: [
      {url: "https://www.baidu.com/s?word=", img:"/img/baidu_search.png"},
      {url: "https://www.sogou.com/web?query=", img:"/img/sogou_search.png"},
      {url: "https://www.google.com.hk/search?q=", img:"/img/google_search.png"},
      {url: "https://cn.bing.com/search?q=", img:"/img/bing_search.png"}
    ],
    searchEnginesActiveOrder: 0,
    bannerImg: "/img/banner.jpg",
    links: [
      {iconSrc:"/img/weibo.png",title:"微博",url:"https://www.weibo.com/"},
      {iconSrc:"/img/baidutranslate.png",title:"百度翻译",url:"https://fanyi.baidu.com/"},
      {iconSrc:"/img/qqmail.png",title:"QQ邮箱",url:"https://mail.qq.com/"},
      {iconSrc:"/img/bilibili.png",title:"哔哩哔哩",url:"http://www.bilibili.com"},
      {iconSrc:"/img/google_translate.png",title:"Google翻译",url:"https://translate.google.cn"},
      {iconSrc:"/img/github.png",title:"Github",url:"https://github.com"},
      {iconSrc:"/img/aliyun.png",title:"阿里云",url:"https://www.aliyun.com"},
      {iconSrc:"/img/baidu_netdisk.png",title:"百度网盘",url:"https://pan.baidu.com"},
      {iconSrc:"/img/youku.png",title:"优酷",url:"https://www.youku.com"},
      {iconSrc:"/img/tencent_qqlive.png",title:"腾讯视频",url:"https://v.qq.com"},
      {iconSrc:"/img/iqiyi.png",title:"爱奇艺",url:"https://www.iqiyi.com"},
      {iconSrc:"/img/taobao.png",title:"淘宝",url:"https://www.taobao.com"},
      {iconSrc:"/img/jd.png",title:"京东",url:"https://www.jd.com"},
      {iconSrc:"/img/tencent_cloud.png",title:"腾讯云",url:"https://cloud.tencent.com/"}
    ],
    numOfRow: 7,
    enterAnimation: true
  },
  mutations: {
    updateEnginesActiveOrder(state,payload){
      state.searchEnginesActiveOrder = payload;
    },
    changeConfig(state,payload){
      state.searchEngines = payload.searchEngines;
      state.bannerImg = payload.bannerImg;
      state.links = payload.links;
      state.numOfRow = payload.numOfRow;
      state.enterAnimation = payload.enterAnimation;
    },
    updateSearchEnginesActiveOrder(state,payload){
      state.searchEnginesActiveOrder = payload;
    }
  },
  actions: {
    enginesIteration(context){
      let num = (context.state.searchEnginesActiveOrder + 1) % context.state.searchEngines.length;
      context.commit('updateEnginesActiveOrder', num);
      window.localStorage.setItem('searchEnginesActiveOrder', num);
    },
    changeConfig(context,payload){
      context.commit('changeConfig',payload);
    },
    checkAndChangeConfig(context,payload){
      if(payload == null ||
        payload.searchEngines == null || payload.searchEngines.length < 1 ||
        payload.searchEngines[0].url == null || payload.searchEngines[0].img == null ||
        payload.bannerImg == null || payload.links == null ||
        payload.numOfRow == null || payload.enterAnimation == null
      ){
        throw new Error("配置信息错误");
      }
      context.commit('changeConfig',payload);
    },
    updateSearchEnginesActiveOrder(context,payload){
      context.commit('updateSearchEnginesActiveOrder',payload);
    }
  },
  modules: {
  },
  getters:{
    currentSearchEngine(state){
      return state.searchEngines[state.searchEnginesActiveOrder];
    }
  }
})
