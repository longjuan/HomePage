<template>
  <router-view/>
</template>

<script>
import {onMounted} from "vue";
import {useStore} from 'vuex'
import { ElNotification } from 'element-plus';

export default {
  name: "App",
  setup(){
    const store = useStore();

    onMounted(()=>{
      let configJson = window.localStorage.getItem('config');
      if(configJson != null){
        try {
          let config = JSON.parse(configJson);
          store.dispatch('checkAndChangeConfig', config);
        } catch (e) {
          window.localStorage.removeItem('config');
          ElNotification.error({
            title: '错误',
            message: '本地浏览器缓存的配置项错误，已为您清除本地配置项',
            duration: 0,
            offset: 100
          });
        }
      }

      let num = parseInt(window.localStorage.getItem('searchEnginesActiveOrder'));
      store.dispatch('updateSearchEnginesActiveOrder',num == null ? 0 : num);
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  padding: 0;
  margin: 0;
}
</style>
