<template>
  <div class="link-item" @click="toLink">
    <p><el-image :src="iconSrc" style="width: 4em;height: 4em;max-width: 96px;"></el-image></p>
    <p class="text-title">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "LinkItem",
  props:{
    iconSrc: String,
    title: String,
    url: String
  },
  setup(props){
    const toLink = () => {
      window.location.href = props.url;
    }

    return {
      toLink
    }
  }
}
</script>

<style scoped>
.link-item{
  position: relative;
  display: inline-block;
  width: 90px;
  border: 0;
  text-align: center;
  margin: 20px 3px;
  cursor:pointer;
}

.icon-img{
  width: 4em;
  height: 4em;
  max-width: 96px;
}

.text-title{
  color: #232323;
  height: 1.5em;
  line-height: 1.5em;
  width: 72px;
  font-size: 0.75em;
  white-space: nowrap;
  overflow: hidden;
  margin: auto;
  padding-top: 3px;
  padding-bottom: 8px;
}
</style>