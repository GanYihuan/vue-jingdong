<template lang="html">
  <Panel
    :class="$style.panel"
    title="理财精选">
    <section :class="$style.content">
      <!-- dl: 使用它作为选择器更优化 -->
      <!-- 线不考虑，因为可以使用伪元素解决 -->
      <dl
        v-for="item in items"
        :class="$style.item"
        :key="item.title">
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
		justify-content: space-around;
    box-sizing: border-box;
    position: relative;
		/* 横线 */
		&:after {
			display: block;
      position: relative;
			top: -208px;
			border-top: 1px solid #ddd;
			width: 100%;
			content: ' ';
		}
		.item {
      box-sizing: border-box;
			position: relative;
			padding: 34px 16px;
			width: 50%;
			/* 竖线 */
			&:after {
				display: block;
				position: absolute;
				right: 0;
				top: 50%; // 垂直居中: margin half
				margin-top: -68px; // 垂直居中: margin half
				border-right: 1px solid #eee;
				width: 1px;
				height: 136px; // 垂直居中: margin half
				content: ' ';
			}
			/* 后面的断线不需要 */
			&:nth-child(2n) {
				/* 竖线 */
				&:after {
					display: none; // display: none 元素不被渲染, position & float 不起作用
				}
			}
			dt {
				line-height: 42px;
				font-size: 30px;
				color: #333;
				span {
					margin-left: 2px;
					padding: 0 8px;
					border: 1px solid #ff5155;
					vertical-align: 1px;
					font-size: 22px;
					color: #ff5155;
				}
			}
			dd {
				&:nth-child(2) {
					/* 文字垂直居中 */
					height: 58px;
					line-height: 58px;
					font-size: 44px;
					font-weight: 700;
					color: #ff5155;
					/* 显示...(two) */
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				&:nth-child(3) {
					/* 文字垂直居中 */
					height: 34px;
					line-height: 34px;
					font-size: 24px;
					color: #999;
					/* 显示...(two) */
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
  }
}
</style>
