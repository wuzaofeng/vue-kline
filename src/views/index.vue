<template>
  <div class="index">
    <!-- 查询 -->
    <div class="search">
      <div class="input">
        <i></i>
        <span>点击搜索股票名称</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import D3 from 'd3'
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  async created () {
    console.log('1111')
  }
})
</script>
<style lang="stylus">
.index
  .search
    height: 35px;
    padding: 15px;
    line-height: 35px;
    background: #162639;
    .input
      display: flex;
      align-items: center;
      justify-content: start;
      border-radius: 5px;
      background: #132234;
      i
        display: inline-block;
        width: 13px;
        height: 13px;
      span
        display: inline-block;
        font-size: 14px;
        color: #506277;
</style>
