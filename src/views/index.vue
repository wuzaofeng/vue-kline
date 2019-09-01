<template>
  <div class="index">
    <!-- 查询 -->
    <search></search>
    <div class="idx-tab">
      <div
        v-for="(item, index) in marketIndex"
        :class="['item', {'active': index === current}]"
        :key="item.assetId"
        @click="changeHandle(index)">
        <p class="name">{{item.name}}</p>
        <p class="price stock-up">{{item.preClose}}</p>
        <div class="change">
          <span class="stock stock-up">{{item.change}}</span>
          <span class="stock stock-up">{{item.changePct | filterPct}}</span>
        </div>
      </div>
    </div>
    <div class="idx-charts">
      <div class="charts-container">
        <charts></charts>
      </div>
    </div>
    <up-down-info
      :market="marketIndex[current]">
    </up-down-info>
    <div class="stock-list">
      <div class="title">所有港股</div>
      <div class="content">
        <div class="thead">
          <div class="th">名称代码</div>
          <div class="th">最新价</div>
          <div class="th">涨跌幅</div>
          <div class="th">成交额</div>
        </div>
        <div
          class="item"
          v-for="item in list"
          :key="item.assetId">
          <div>
            <p class="name">{{item.name}}</p>
            <p class="code">{{item.assetId}}</p>
          </div>
          <div class="stock stock-up">{{item.price}}</div>
          <div class="stock stock-up">{{item.changePct | filterPct}}</div>
          <div class="price">{{item.turnover}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getMarketIndex, allStocks, getTimeSharing } from '@/api'
import Search from '@/components/search.vue'
import UpDownInfo from '@/components/up-down-info.vue'
import Charts from '@/components/charts/index.vue'

export default Vue.extend({
  name: 'Index',
  data () {
    return {
      current: 0,
      count: 40,
      level: 'LV2',
      market: 'HK',
      list: '',
      idxInfo: [],
      marketIndex: []
    }
  },
  components: {
    Search,
    UpDownInfo,
    Charts
  },
  filters: {
    filterPct (val: string): string {
      return `+${(Number(val) * 100).toFixed(2)}%`
    }
  },
  created () {
    this.fetchMarketIndex()
    this.fetchAllStocks()
  },
  methods: {
    async fetchAllStocks () {
      const res = await allStocks({
        count: this.count,
        level: this.level,
        market: this.market
      })
      this.list = res.data
    },
    async fetchMarketIndex () {
      const res = await getMarketIndex({
        level: this.level,
        position: 'HK'
      })
      this.marketIndex = res.data
    },
    changeHandle (index: number) {
      this.current = index
    }
  }
})
</script>

<style lang="stylus" scoped>
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
      width: 20%;

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

.idx-tab
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #e6eef6;

  .item
    flex: 1;
    text-align: center;
    background: #162639;
    box-shadow: 0 0 12px 0 rgba(0,0,0,.2);
    padding: 15px 0;
    margin-right: 10px;

    &.active
      position: relative;
      background: #1c2c40;
      &::after
        position: absolute;
        bottom: -12px;
        left: 50%;
        content: "";
        transform: translateX(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: #1c2c40 transparent transparent;

    &:last-child
      margin-right: 0;
    p
      margin: 0;

    .name
      font-size: 13px;

    .price
      font-size: 16px;

    .change
      font-size: 12px;

      .stock:first-child
        margin-right: 5px;

.idx-charts
  padding: 5px 10px;

  .charts-container
    background: rgb(19, 34, 52);
    height: 100px;
    width: 100%;
</style>
