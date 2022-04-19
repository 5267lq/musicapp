<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>
      </div> -->
      <swiper
        class="swiper-container"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :slides-per-view="3"
        :space-between="10"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="{ autoplay: true }"
      >
        <!-- <swiper-slide v-for="(item, i) in musicList" :key="i"> -->
        <!-- <swiper-slide @click="gotoList" v-for="(item, i) in state.musicList" :key="i"> -->
        <swiper-slide v-for="(item, i) in state.musicList" :key="i">
          <router-link :to="{ path: '/listview', query: { id: item.id } }">
            <img :src="item.picUrl" :alt="item.name" />
            <div class="name">{{ item.name }}</div>
            <div class="count">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gl-play"></use>
              </svg>
              <span>{{ changeValue(item.playCount) }}</span>
            </div>
          </router-link>
        </swiper-slide>

        <!-- <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 3</swiper-slide> -->
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
import { getMusicList } from "../api/index.js";

import { reactive, onMounted } from "vue";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default {
  name: "swiperCom",
  components: {
    Swiper,
    SwiperSlide,
  },
  /* //vue2写法 
  data: function () {
    return {
      musicList: [],
    };
  },
  methods:{
    changeValue(num){
      let res=0;
      if(num>100000000){
        res=num/100000000;
        res=res.toFixed(2)+'亿';
      }
      else if(num>10000){
        res=num/10000;
        res=res.toFixed(2)+'万';
      }
      return res;
    }
  },
  async mounted() {
    // let res=await axios.get('http://localhost:3000/personalized?limit=10')
    let res = await getMusicList(10);
    console.log(res);
    this.musicList = res.data.result;
  },*/

  setup() {
    let state = reactive({ musicList: [] });
    function changeValue(num) {
      let res = 0;
      if (num > 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num > 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    }
    // function gotoList(){
    //   this.$router.push('/listview')
    // }
    onMounted(async () => {
      let result = await getMusicList();
      console.log(result);
      state.musicList = result.data.result;
    });

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      state,
      changeValue,
      // gotoList,

      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  padding: 0 0.4rem;
  .musicList-top {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid grey;
      padding: 0.07rem;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      height: 0.5rem;
      width: 1.2rem;
      text-align: center;
    }
  }
  .mlist {
    .swiper-container {
      width: 100%;
      height: 3rem;
      .swiper-slide {
        display: flex;
        flex-direction: column;
        position: relative;
        img {
          width: 100%;
          height: auto;
          border-radius: 0.1rem;
        }
        .name {
          height: 0.6rem;
          width: 100%;
          font-size: 0.24rem;
          line-height: 0.4rem;
        }
        .count {
          position: absolute;
          right: 0.1rem;
          top: 0.1rem;
          font-size: 0.24rem;
          color: rgb(210, 201, 201);
          display: flex;
          align-items: center;
          .icon {
            fill: rgb(210, 201, 201);
          }
        }
      }
    }
  }
}
</style>