<template>

  <div class="main-box">
    <div style="height: 30px;text-align: right;">
      <el-affix style="padding-top: 20px;">
        <el-tooltip content="设置" placement="bottom" effect="light">
          <el-button icon="el-icon-setting" circle @click="$router.push({path:'/setting'})"></el-button>
        </el-tooltip>
        <el-tooltip content="更多信息" placement="bottom" effect="light">
          <el-button icon="el-icon-more-outline" circle @click="$router.push({path:'/info'})"></el-button>
        </el-tooltip>
        <div style="display: inline-block;width: 20px;"></div>
      </el-affix>
    </div>
    <transition name="fade">
    <div class="banner" v-show="isShow">
      <el-image :src="$store.state.bannerImg" style="height: 200px;" fit="contain"></el-image>
    </div>
    </transition>
    <transition name="fade">
    <div class="search-input" v-show="isShow">
      <el-autocomplete
          v-model="input"
          :fetch-suggestions="querySearchAsync"
          @select="toSearch"
          :trigger-on-focus="false"
          class="input-text"
          :autofocus="true"
          :input-style="{'font-size':'17px'}"
          @keydown.down="add(1)"
          @keydown.up="add(-1)"
          @keydown.enter="handleEnter"
      >
        <template #prefix>
          <el-tooltip content="点击切换搜索引擎" placement="bottom" effect="light" :show-after="500">
            <search-engines-switch></search-engines-switch>
          </el-tooltip>
        </template>
        <template #suffix>
          <button class="start-search" @click="toSearch" style="cursor:pointer;">Start&nbsp;&nbsp;</button>
        </template>
      </el-autocomplete>
    </div>
    </transition>
    <div class="links" v-for="line of Math.ceil($store.state.links.length/$store.state.numOfRow)" :key="line">
      <transition-group name="slide-up">
      <link-item
          v-for="(item,index) in $store.state.links.slice($store.state.numOfRow * (line-1), $store.state.numOfRow * line)"
          :key="index" :icon-src="item.iconSrc" :title="item.title" :url="item.url" v-show="isShow"
      ></link-item>
      </transition-group>
    </div>
    <div class="footer-info">
      <!-- footer info -->
    </div>
  </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import { jsonp } from 'vue-jsonp'
import {useStore} from 'vuex'
import SearchEnginesSwitch from "@/components/SearchEnginesSwitch";
import LinkItem from "@/components/LinkItem";
export default {
  name: "Home",
  components:{
    SearchEnginesSwitch,
    LinkItem
  },
  setup(){
    const store = useStore();

    let input = ref("");
    let isShow = ref(!store.state.enterAnimation);

    let lastFetch = [];
    let backup = "";
    let move = -1;

    const querySearchAsync = (queryString, cb) => {
      let results = [];
      lastFetch = [];
      move = -1;
      backup = input.value;
      jsonp('https://suggestion.baidu.com/su?wd='+queryString,{callbackQuery: 'cb'}).then(res=>{
        res.s.forEach(item => results.push({value: item}));
        cb(results);
        lastFetch = results;
        move = -1;
      })
    };

    const toSearch = () => {
      window.location.href = store.getters.currentSearchEngine.url + input.value
    }

    onMounted(()=>{
      setTimeout(()=>{
        isShow.value = true;
      },1)
    })

    const add = (num)=>{
      move += num;
      if(move > lastFetch.length-1){
        move = lastFetch.length-1;
      }

      if(move < 0){
        move = -1;
        input.value = backup;
      }else{
        input.value = lastFetch[move].value;
      }
    }

    const handleEnter = (event) => {
      // macOS IME sends Enter before composition ends; guard until input finished composing
      if (event && (event.isComposing || event.keyCode === 229)) {
        return;
      }
      toSearch();
    }

    return {
      input,
      querySearchAsync,
      toSearch,
      isShow,
      add,
      handleEnter
    }
  }
}
</script>

<style lang="scss">
.main-box{
  .el-input__inner{
    border-radius: 50px !important;
    -webkit-box-shadow: #ccc 0 0 15px;
    -moz-box-shadow: #ccc 0 0 15px;
    box-shadow: #ccc 0 0 15px;
    height: 50px;
  }
  .input-text{
    width: 50%;
    max-width: 900px;

  }
  .start-search{
    color: black;
    font-size: 16px;
    font-weight: 700;
    border: 0;
    background: transparent;
    height: 100%;
  }
  .el-input--prefix .el-input__inner{
    padding-left: 50px !important;
  }
  .el-input--suffix .el-input__inner{
    padding-right: 50px !important;
  }
  .banner{
    margin: 15px;
  }
  .search-input{
    margin-bottom: 35px;
  }
  .fade-enter-active{
    transition: opacity 0.8s linear;
  }
  .fade-enter-from{
    opacity: 0;
  }

  .slide-up-enter-active {
    transition: all 0.6s ease-out;
  }
  .slide-up-enter-from{
    transform: translateY(20px);
  }
  .footer-info{
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 1px;
    color: #dddddd;
  }
}
</style>
