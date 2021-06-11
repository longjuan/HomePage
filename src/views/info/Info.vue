<template>
  <div>
    <el-container>
      <el-header>
        <el-affix :offset="0">
          <div style="background: white">
            <el-page-header @back="$router.push({path:'/'})" content="信息" style="padding-top: 15px;"></el-page-header>
            <el-divider :style="{'margin':'20px 0'}"></el-divider>
          </div>
        </el-affix>
      </el-header>
      <el-main class="typora">
        <div class="typora-export os-windows">
        <div class='typora-export-content'><div id='write'  class=''><div class='md-toc' mdtype='toc'><p class="md-toc-content" role="list"><span role="listitem" class="md-toc-item md-toc-h1" data-ref="n124"><a class="md-toc-inner" href="#主页">主页</a></span><span role="listitem" class="md-toc-item md-toc-h2" data-ref="n127"><a class="md-toc-inner" href="#界面">界面</a></span><span role="listitem" class="md-toc-item md-toc-h2" data-ref="n137"><a class="md-toc-inner" href="#设置">设置</a></span><span role="listitem" class="md-toc-item md-toc-h3" data-ref="n151"><a class="md-toc-inner" href="#选项配置">选项配置</a></span><span role="listitem" class="md-toc-item md-toc-h1" data-ref="n159"><a class="md-toc-inner" href="#开源">开源</a></span></p></div><h1 id='主页'><span>主页</span></h1><blockquote><p><span>一个干净可自定义的主页（导航页）</span></p></blockquote><h2 id='界面'><span>界面</span></h2><blockquote><p><span>包含</span></p></blockquote><ul><li><span>主图</span></li><li><span>搜索栏</span></li><li><span>导航链接</span></li></ul><h2 id='设置'><span>设置</span></h2><blockquote><p><span>可自定义内容</span></p></blockquote><ul><li><span>主图</span></li><li><span>搜索引擎（含图标）</span></li><li><span>导航链接（含图标、链接、标题）</span></li><li><span>每行导航链接图标个数</span></li><li><span>入场动画</span></li></ul><h3 id='选项配置'><span>选项配置</span></h3><p><span>在配置完配置项后点击</span><code>保存配置至浏览器缓存</code><span>即可完成自定义</span></p><p><code>清除本地配置</code><span>可还原成默认配置</span></p><blockquote><p><span>清理软件或浏览器清除浏览数据后可能导致配置丢失，还原成默认配置</span></p><p><span>建议完成自定义后下载配置文件到本地保存</span></p><p><span>可在</span><code>设置-导入/导出页面</code><span>进行操作</span></p></blockquote><p><span>其中自定义各种图片/图标链接应填写图片的网络地址（以</span><code>https</code><span>/</span><code>http</code><span>开头）</span></p><h1 id='开源'><span>开源</span></h1></div></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Info"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/typora.scss";
</style>