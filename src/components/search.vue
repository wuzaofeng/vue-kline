<template>
  <div class="search">
    <div class="input">
      <i></i>
      <span>点击搜索股票名称</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'search'
})
</script>

<style lang="stylus">
.search
  height: 35px;
  padding: 15px;
  line-height: 35px;
  background: #162639;
  .input
    display: flex;
    align-items: center;
    justify-items: start;
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
