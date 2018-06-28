<template lang="html">
  <!-- $style: 命名空间 -->
  <div :class="$style.header">
    <span :class="$style.left">
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
    </span>
    <btn :class="$style.btnDownload">APP下载</btn>
  </div>
</template>

<script>
import btn from '../core/btn.vue'
export default {
	components: {
		btn
	}
}
</script>

<style lang="scss" module>
// module: 局域化
.header {
	z-index: 100;
	position: fixed;
  top: 0;
  // lett:0, right:0 -> width: 100%
	left: 0;
  right: 0;
  // dpr=2
	height: 100px;
	line-height: 100px;
	font-size: 32px;
	color: #666;
	background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center
		center no-repeat;
	background-size: auto 50%;
	.left {
    margin: 17px 0 0 18px;
		height: 30px;
		line-height: 30px;
		font-size: 28px;
	}
	.btnDownload {
		float: right;
		margin: 28px 24px 0 0;
		border-radius: 4px;
		border-width: 0;
		padding: 0;
		min-width: 120px;
		height: 56px;
		line-height: 56px;
		font-size: 24px;
	}
}
</style>
