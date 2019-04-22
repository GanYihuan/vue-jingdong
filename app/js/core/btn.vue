<template lang="html">
  <!-- 只能有一个根标签 -->
  <div :class="[btnClass,cname]">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      btnClass: 'btn'
    }
  }
}
</script>

<style lang="scss">
@import '../../css/element.scss';

.btn {
	@include btn;
}
</style>
