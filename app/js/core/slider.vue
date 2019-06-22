<template lang="html">
  <section :class="cname">
    <swiper
      :options="options"
      :not-next-tick="options.notNextTick">
      <swiper-slide
        v-for="item in items"
        :key="item.src">
        <router-link :to="{name: item.href}">
          <img
            :src="item.src"
            alt="">
        </router-link>
      </swiper-slide>
      <!-- slot="pagination": swiper 官网, SPA 用法 -->
      <div
        v-if="options.pagination"
        slot="pagination"
        class="swiper-pagination"/>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false // 用户操作swiper之后，是否禁止 autoplay。默认为 true 停止
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          /*
          下一个点击事件
          notNextTick 是一个组件自有属性，
          如果 notNextTick 设置为 true，
          组件则不会通过 NextTick 来实例化 swiper，
          也就意味着你可以在第一时间获取到 swiper 对象，
          假如你需要刚加载就使用获取 swiper 对象来做什么事，
          那么这个属性一定要是 true
          */
          notNextTick: false
          // direction: 'vertical' // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
          // slidesPerView: 2, // 设置slider容器能够同时显示的slides数量
          // spaceBetween: 30, // slide之间的距离（单位px）
          // freeMode: true // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合
        }
      }
    }
  }
}
</script>

<style lang="css">
@import '~swiper/dist/css/swiper.css';
</style>
