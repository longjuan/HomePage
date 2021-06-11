<template>
  <div>
    <div style="height: 20px;"><el-divider>导出配置文件</el-divider></div>
    <el-button type="primary" icon="el-icon-download" @click="exportConfig">导出</el-button>

    <div style="height: 60px;"><div style="height: 20px;"></div><el-divider>导入配置文件</el-divider></div>
    <el-upload
        action=""
        class="upload-demo"
        drag
        accept=".json"
        :http-request="onUpload"
        :limit="1"
        :file-list="myFileList"
        :on-change="loadJsonFromFile"
        multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">
          只能上传 .json 文件
        </div>
      </template>
    </el-upload>

    <div style="height: 60px;"><div style="height: 20px;"></div><el-divider>配置信息</el-divider></div>
    <el-input
        type="textarea"
        :autosize="{ minRows: 2}"
        v-model="configJson" :style="{'width':'70%'}">
    </el-input>

  </div>
</template>

<script>
import { saveAs } from 'file-saver';
import {useStore} from 'vuex'
import {computed,ref} from "vue";
import { ElMessage } from 'element-plus'

export default {
  name: "ImportExportSetting",
  setup(){
    const store = useStore();

    let myFileList = ref([]);

    const configJson = computed(()=>{
      return JSON.stringify({
        searchEngines: store.state.searchEngines,
        bannerImg: store.state.bannerImg,
        links: store.state.links,
        numOfRow: store.state.numOfRow,
        enterAnimation: store.state.enterAnimation
      });
    })

    const exportConfig = () => {
      let configStr = new Blob([configJson.value], {type: "text/plain;charset=utf-8"});
      saveAs(configStr, "homepage_config.json");
    }

    const onUpload = () => {
      let reader = new FileReader();
      reader.readAsText(myFileList.value[0].raw);
      reader.onload = data => {
        let jsonData = data.target.result;
        try {
          let config = JSON.parse(jsonData);
          store.dispatch('checkAndChangeConfig', config);
          window.localStorage.setItem('config',config);
          ElMessage.success("配置应用完成");
        } catch (e) {
          ElMessage.error('上传的配置文件有错误，请使用手动配置');
        }
        myFileList.value = [];
      }
    }

    const loadJsonFromFile = (file, fileList)=>{
      myFileList.value = fileList;
    }

    return {
      configJson,
      exportConfig,
      onUpload,
      myFileList,
      loadJsonFromFile
    }
  }
}
</script>

<style lang="scss">
.upload-demo{
  .el-upload-list{
    display: none;
  }
}
</style>