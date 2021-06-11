<template>
  <div>
    <div style="height: 10px;"><el-divider>搜索引擎</el-divider></div>
    <el-table
        :data="config.searchEngines"
        style="width: 75%">
      <el-table-column
          label="搜索引擎链接"
          min-width="250">
        <template #default="scope">
          <el-input v-model="scope.row.url" placeholder="最终跳转地址为本框填写内容+搜索内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
          label="图标链接"
          min-width="200">
        <template #default="scope">
              <div style="text-align: left;display: flex">
                <el-image :src="scope.row.img" style="width: 40px; height: 40px;flex: none" fit="contain"></el-image>
                <el-input v-model="scope.row.img" placeholder="请输入图标地址" style="flex: 1"></el-input>
              </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
              size="mini"
              type="danger"
              @click="deleteEngine(scope.$index)">删除</el-button>
        </template>
        <template #header>
          <div style="display: flex">
            操作&nbsp;
            <el-button size="mini" type="primary"
              @click="config.searchEngines.push({url:'',img:''})">新增</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div style="height: 80px;"><div style="height: 60px;"></div><el-divider>主图</el-divider></div>
    <div>
      <el-image :src="config.bannerImg" style="height: 200px;" fit="contain"></el-image>
      <el-form :inline="true">
      <el-form-item label="主图地址">
        <el-input v-model="config.bannerImg" placeholder="请输入主图地址" :style="{'min-width': '400px','width':'50%'}"></el-input>
      </el-form-item>
      </el-form>
    </div>

    <div style="height: 80px;"><div style="height: 70px;"></div><el-divider>导航链接</el-divider></div>
    <div>
      <el-table
          :data="config.links"
          style="width: 75%">
        <el-table-column
            label="链接标题"
            min-width="100">
          <template #default="scope">
            <el-input v-model="scope.row.title" placeholder="请填写链接标题"></el-input>
          </template>
        </el-table-column>
        <el-table-column
            label="链接地址"
            min-width="200">
          <template #default="scope">
            <el-input v-model="scope.row.url" placeholder="请填写链接地址"></el-input>
          </template>
        </el-table-column>
        <el-table-column
            label="图标链接"
            min-width="200">
          <template #default="scope">
            <div style="text-align:left;display: flex">
              <el-image :src="scope.row.iconSrc" style="width: 40px; height: 40px;flex: none" fit="contain"></el-image>
              <el-input v-model="scope.row.iconSrc" placeholder="请输入图标地址" style="flex: 1;"></el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
                size="mini"
                type="danger"
                @click="config.links.splice(scope.$index,1)">删除</el-button>
          </template>
          <template #header>
            <div style="display: flex">
              操作&nbsp;
              <el-button size="mini" type="primary"
                         @click="config.links.push({url:'',iconSrc:'',title:''})">新增</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div style="height: 80px;"><div style="height: 60px;"></div><el-divider>每行图标个数</el-divider></div>
    <div>
      <el-input-number v-model="config.numOfRow" :min="1" label="每行图标个数"></el-input-number>
    </div>

    <div style="height: 80px;"><div style="height: 60px;"></div><el-divider>入场动画</el-divider></div>
    <div>
      <el-switch v-model="config.enterAnimation" active-text="开启动画" inactive-text="关闭动画"></el-switch>
    </div>

    <div style="height: 50px;"></div>
    <el-button type="primary" plain icon="el-icon-collection" @click="saveConfig">保存配置至浏览器缓存</el-button>
    <el-button plain @click="cleanConfig">清除本地配置</el-button>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {reactive} from 'vue'
import { ElMessage } from 'element-plus'
export default {
  name: "BaseSetting",
  setup(){
    const store = useStore();

    let config = reactive(JSON.parse(JSON.stringify({
      searchEngines: store.state.searchEngines,
      bannerImg: store.state.bannerImg,
      links: store.state.links,
      numOfRow: store.state.numOfRow,
      enterAnimation: store.state.enterAnimation
    })))

    const saveConfig = () => {
      store.dispatch('changeConfig',config);
      store.dispatch('updateSearchEnginesActiveOrder',0);
      let configJson = JSON.stringify(config);
      window.localStorage.setItem('config',configJson);
      ElMessage.success('保存成功');
    }

    const deleteEngine = index => {
      if (config.searchEngines.length <= 1){
        ElMessage.error('最少保留一个哦');
      }else{
        config.searchEngines.splice(index,1);
      }
    }

    const cleanConfig = () => {
      window.localStorage.removeItem('config');
      window.localStorage.removeItem('searchEnginesActiveOrder');
      ElMessage.success('清除成功，马上将会刷新');
      setTimeout(()=>window.location.href='/',2000)
    }

    return {
      config,
      saveConfig,
      deleteEngine,
      cleanConfig
    }
  }
}
</script>

<style scoped>
div{
  text-align:center;
  margin: 0 auto;
}
</style>