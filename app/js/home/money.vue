<template lang="html">
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <!-- dl: 使用它作为选择器更优化 -->
      <!-- 线不考虑，因为可以使用伪元素解决 -->
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
        <dd>{{ item.rate }}</dd>
        <dd>{{ item.text }}</dd>
      </dl>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
	components: {
		Panel
	},
	data() {
		return {
			items: [
				{
					title: '定期理财',
					sub: '理财首选',
					rate: '5.60%',
					text: '历史年化回报率'
				},
				{
					title: '小白理财',
					sub: '理财首选',
					rate: '4.22%',
					text: '7日年化收益率'
				},
				{
					title: '月月盈',
					sub: '养老保障',
					rate: '5%',
					text: '七日年化收益率'
				},
				{
					title: '小白基金',
					sub: '天天赚钱',
					rate: '4.27%',
					text: '7日年化收益率'
				}
			]
		}
	}
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel {
	@include panel;
	.content {
    @include flex(row);
    // 主轴
		justify-content: space-around;
    box-sizing: border-box;
    // 上下分割线
		&:after {
      display: block;
      // 允许有偏移量
			position: relative;
			top: -208px;
			box-sizing: border-box;
			border-bottom: 1px solid #ddd;
			width: 100%;
			height: 0px;
			content: ' ';
		}
		.item {
      // 为下面position: absolute准备
      position: relative;
      // 为了width: 50%
      box-sizing: border-box;
      padding: 34px 16px;
      width: 50%;
      // 断线
			&:after {
				display: block;
				position: absolute;
				top: 50%;
				right: 0;
				margin-top: -68px;
				border-right: 1px solid #eee;
				width: 1px;
				height: 136px;
				content: ' ';
      }
      // 后面的断线不需要, 2n偶数
			&:nth-child(2n) {
				&:after {
					display: none;
				}
			}
			dt {
				line-height: 42px;
				font-size: 30px;
				color: #333;
				span {
					margin-left: 2px;
					border: 1px solid #ff5155;
					padding: 0 8px;
					vertical-align: 1px;
					font-size: 22px;
					color: #ff5155;
				}
			}
			dd {
				&:nth-child(2) {
          height: 58px;
					line-height: 58px;
					font-weight: 700;
          font-size: 44px;
					color: #ff5155;
          // 显示...
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				&:nth-child(3) {
          height: 34px;
					line-height: 34px;
          font-size: 24px;
					color: #999;
          // 显示...
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
}
</style>
