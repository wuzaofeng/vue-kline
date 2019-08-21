<template>
  <div class="index">
    <!-- 查询 -->
    <search></search>
    <div class="stock-list">
      <div class="title">所有港股</div>
      <div class="content">
        <div class="thead">
          <div class="th">名称代码</div>
          <div class="th">最新价</div>
          <div class="th">涨跌幅</div>
          <div class="th">成交额</div>
        </div>
        <div class="item">
          <div>
            <p class="name">中国北大荒</p>
            <p class="code">00039.HK</p>
          </div>
          <div class="stock">0.095</div>
          <div class="stock">+72.73%</div>
          <div class="price">2777.0万</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Search from '@/components/search.vue'

export default Vue.extend({
  name: 'Index',
  components: {
    Search
  },
  async created () {
  }
})
</script>

<style lang="stylus">
.stock-list
  .title
    font-size: 14px;
    padding: 15px;
    color: #a8b6c8;
    font-weight: 700;
  .thead,
  .item
    display: flex;
    padding: 0 15px;
    color: #e6eef6;

    & > div
      padding: 10px 0;
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-items: center;
      flex-direction: column;
      font-size: 14px;

    & > div:first-child
      align-items: start;

  .th
    padding: 10px 0;
    color: #67788c;
    font-size: 12px;

  .name
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #e6eef6;
    font-size: 15px;
    margin: 0;

  .code
    margin: 0;
    font-size: 10px;
    color: #67788c;
</style>
