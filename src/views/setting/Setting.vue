<template>
  <div>
    <el-container>
      <el-header>
        <el-affix :offset="0">
          <div style="background: white">
            <el-page-header @back="$router.push({path:'/'})" content="设置" style="padding-top: 15px;"></el-page-header>
            <el-divider :style="{'margin':'20px 0'}"></el-divider>
          </div>
        </el-affix>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-affix :offset="61">
            <el-menu
              :default-active="$route.path"
              :router="true"
              :style="{'height':'100vh'}">
              <el-menu-item index="/setting">
                <i class="el-icon-s-operation"></i>
                <template #title>选项配置</template>
              </el-menu-item>
              <el-menu-item index="/setting/port">
                <i class="el-icon-share"></i>
                <template #title>导入/导出</template>
              </el-menu-item>
            </el-menu>
          </el-affix>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Setting"
}
</script>

<style scoped>
div{
  height: 100;
}
</style>