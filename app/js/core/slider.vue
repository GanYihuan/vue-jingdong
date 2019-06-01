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
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
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
        }
      }
    }
  }
}
</script>

<style lang="css">
@import '~swiper/dist/css/swiper.css';
</style>
