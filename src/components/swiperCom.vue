<template>
  <div id="swipercom">
    <swiper
      class="swiper-container"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{ clickable: true }"
      :autoplay="{ autoplay: true }"
      loop
    >
      <!-- <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide> -->
      <swiper-slide class="swiper-slide" v-for="(item, i) in imgs" :key="i">
        <!-- <img :src="item" alt="" /> -->
        <img :src="item.pic" alt="" />
      </swiper-slide>
      <!-- <swiper-slide
        class="swiper-slide"
        v-for="(banner, index) in banners"
        :key="index"
        >Slide 1
        <img
          style="width: 7.5rem; height: 3.6rem"
          v-bind:src="require('../assets/' + banner)"
          alt=""
        />
      </swiper-slide> -->
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
// 引入axios
import axios from "axios";
import { getBanner } from "../api/index.js";
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
  data: function () {
    return {
      // imgs: [
      //   require("../assets/img/swiper1.jpg"),
      //   require("../assets/img/swiper2.jpg"),
      //   require("../assets/img/swiper3.jpg"),
      //   require("../assets/img/swiper4.jpg"),
      // ],
      imgs: [
        { pic: require("../assets/img/swiper1.jpg") },
        { pic: require("../assets/img/swiper1.jpg") },
        { pic: require("../assets/img/swiper1.jpg") },
        { pic: require("../assets/img/swiper1.jpg") },
      ],
    };
  },
  // data() {
  // return {
  //    banners: ["logo.png", "logo.png", "logo.png"],
  // };
  // },
  components: {
    Swiper,
    SwiperSlide,
  },
  // mounted(){
  //   axios.get('http://localhost:3000/banner?type=1').then((res)=>{
  //     console.log(res);
  //   })
  // },
  async mounted() {
    // let res=await axios.get('http://localhost:3000/banner?type=1')
    let res = await getBanner(1);
    console.log(res);
    this.imgs = res.data.banners;
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<style lang="less" scoped>
#swipercom {
  width: 7.5rem;
  .swiper-container {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #248cc0;
    --swiper-navigation-color: #248cc0;
    --swiper-navigation-size: 20px;
  }
  .swiper-slide img {
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    // scoped去掉即可更改
    background-color: chartreuse;
  }
}
</style>