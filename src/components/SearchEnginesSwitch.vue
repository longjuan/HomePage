<template>
  <div class="switch-box">
    <div  class="eng-img" @click="enginesSwitch">
      <el-image :src="$store.getters.currentSearchEngine.img"
        style="height: 28px;width: 28px;"
        fit="contain"
      >
        <template #error>
          <div class="img-miss"><div>加载失败</div></div>
        </template>
      </el-image>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  name: "SearchEnginesSwitch",
  setup(){
    const store = useStore();

    const enginesSwitch = () => {
      store.dispatch('enginesIteration');
    }

    return {
      enginesSwitch
    }
  }
}
</script>

<style scoped lang="scss">
.switch-box{
  height: 100%;
  width: 40px;
  position: relative;
  cursor:pointer;
}
.eng-img{
  position: absolute;
  width: 28px;
  height: 28px;
  top: -1px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.img-miss{
  width: 100%;
  height: 100%;
  background: rgb(245,247,250);
  font-size: 13px;
  line-height: 1;
  margin-top: 1px;
}
</style>