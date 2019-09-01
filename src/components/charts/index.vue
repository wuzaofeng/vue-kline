<template>
<div>
  <!-- <canvas class="stock_canvas" ref="canvas"></canvas> -->
  <div class="stock"></div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import d3 from 'd3'
import Kline from './kline'
export default Vue.extend({
  name: 'charts',
  props: {
    el: {
      type: String,
      default: '.stock'
    },
    tsArray: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    const vm: any = this as Vue
    vm.Kline = new Kline({
      el: this.el
    })
  }
})
</script>

<style lang="stylus" scoped>
.svg {
  width: 100%;
  height: 100%;
}
</style>
