<template>
  <div class="up-down-info">
    <i class="icon-up"></i>
    <span class="up">{{market.upNum}}</span>
    <div class="line">
      <div
      class="line-up"
      :style="{'flex': style.up + '%'}"
      ></div>
      <div
        class="line-base"
        :style="{'flex': style.even + '%'}"
        ></div>
      <div
        class="line-down"
        :style="{'flex': style.down + '%'}"></div>
    </div>
    <span class="down">{{market.downNum}}</span>
    <i class="icon-down"></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'up-down-info',
  props: {
    market: {
      type: Object,
      default: () => ({
        upNum: 1,
        downNum: 1,
        evenNum: 1
      })
    }
  },
  computed: {
    style (): any {
      const upNum = Number(this.market.upNum) || 0
      const downNum = Number(this.market.downNum) || 0
      const evenNum = Number(this.market.evenNum) || 0
      const total = upNum + downNum + evenNum || 1
      return {
        up: upNum / total * 100,
        even: evenNum / total * 100,
        down: downNum / total * 100
      }
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@assets/styl/theme.styl"
.up-down-info {
  display: flex;
  padding: 5px;

  .icon-up,
  .icon-down {
    display: inline-block;
    border-width: 4px;
    border-style: solid;
  }

  .icon-up {
    transform: translateY(-40%);
    border-color: transparent transparent $stock-up;
  }
  .icon-down {
    transform: translateY(40%);
    border-color: $stock-down transparent transparent;
  }
  .up,
  .down {
    margin: 0 5px;
    font-size: 13px;
  }

  .up {
    color: $stock-up;
  }

  .down {
    color: $stock-down;
  }

  .line {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

    .line-base {
      flex: 1;
      height: 2px;
      background-color: #3b4653;
    }

    .line-up {
      flex: 10%;
      height: 2px;
      background-color: $stock-up;
    }

    .line-down {
      flex: 20%;
      height: 2px;
      background-color: $stock-down;
    }
  }
}
</style>
