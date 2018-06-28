<template lang="html">
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{name: item.href}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <!-- slot="pagination": swiper官网, SPA用法 -->
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
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
		options: {
			type: Object,
			/* 任何对象都要返回 */
			default() {
				return {
					autoplay: true,
					loop: true,
					pagination: {
						el: '.swiper-pagination'
					},
					/* notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true */
					notNextTick: false
				}
			}
		},
		items: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style lang="css">
@import '~swiper/dist/css/swiper.css';
</style>
