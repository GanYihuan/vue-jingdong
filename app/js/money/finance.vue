<template lang="html">
  <Panel
    :class="$style.panel"
    title="理财精选">
    <section :class="$style.content">
      <div :class="$style.item">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"
          alt="">
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率4.50%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
      <div :class="$style.item">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"
          alt="">
        <div>
          <h4>季度理财</h4>
          <p>历史年化回报率5.50%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
      <div :class="$style.item">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"
          alt="">
        <div>
          <h4>一年理财</h4>
          <p>历史年化回报率5.80%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
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

.panel {
	@include panel;
	> h4 {
		border-bottom: 1px solid #ddd;
	}
	.content {
		@include flex;
		.item {
			@include flex(row);
			align-items: center;
			height: 140px;
			/* 横线 */
			&:after {
        box-sizing: border-box;
        display: block;
        position: relative;
        top: 10px;
				margin-left: 150px;
				border-bottom: 1px solid #ddd;
				width: 100%;
				height: 0;
				content: ' ';
			}
			/* 断线消失 */
			&:last-child:after {
				border-color: #fff;
			}
			> img {
				display: inline-block;
				margin: 0 32px;
				width: 88px;
				height: 88px;
			}
			> div {
				width: 344px;
				line-height: 1.8;
				font-size: 32px;
				color: #333;
				p {
					line-height: 1.1;
					font-size: 24px;
					color: #ff3232;
					/* 显示...(two) */
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
			}
			> em {
				font-size: 28px;
				color: #ff801a;
			}
		}
	}
}
</style>
