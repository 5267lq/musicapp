<template>
  <div class="listView">
    <listview-top :playlist="state.playlist"></listview-top>
  </div>
</template>
<script>
import { getPlaylistDetail } from "../api/index.js";
import { onMounted, reactive } from "vue";
//使用useRoute在setup中获取路由
import { useRoute } from "vue-router";

import listviewTop from "../components/listviewTop.vue";

export default {
  setup() {
    const route = useRoute();
    // 添加creator
    let state = reactive({ list: [], playlist: { creator: {} } });
    onMounted(async () => {
      let id = route.query.id;
      console.log(route);
      let result = await getPlaylistDetail(id);
      state.playlist = result.data.playlist;
      console.log(result);
    });
    return {
      state,
    };
  },
  components: {
    listviewTop,
  },
};
</script>