<template lang="html">
  <Panel
    :class="$style.panel"
    title="下载APP">
    <section :class="$style.content">
      <div class=""/>
      <p>立即下载</p>
      <span>copyright</span>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
html,
body {
	background: #fff;
}
.panel {
	@include panel;
	margin: 0 !important;
	> h4 {
		display: none;
	}
	.content {
		@include flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 1136px;
		> div {
			margin-top: -400px; // 容器水平垂直居中一: margin half
			width: 600px;
			height: 800px;
			background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?)
				center center no-repeat;
			background-size: 100% auto;
		}
		> p {
			@include btn(
				$size: 32px,
				$color: #fff,
				$bgcolor: #f1443e,
				$padding: 5px,
				$radius: 5px
			);
			position: fixed;
			bottom: 130px;
			width: 471px;
			height: 100px;
			line-height: 100px;
			background-image: linear-gradient(270deg, #f55c33 0, #ee2d1b 75%);
			box-shadow: 0 12px 32px 0 rgba(255, 159, 135, 0.6);
		}
		span {
			position: fixed;
			bottom: 16px;
			font-size: 24px;
			color: #eee;
		}
	}
}
</style>
