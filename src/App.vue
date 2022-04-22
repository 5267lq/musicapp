<template>
  <div>
    <router-view />
    <!-- 网易云音乐下端播放组件全局使用，故单独创建   同时全局用到的数据可以在store中操作（vuex） -->
    <play-controller></play-controller>
  </div>
</template>
<script>
import playController from "@/components/playController";
export default {
  components:{
    playController
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}
// 去掉a标签下划线
a {
  color: black;
  text-decoration: none;
}
</style>
