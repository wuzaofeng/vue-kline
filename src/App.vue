<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getTimeSharing } from './api'

export default Vue.extend({
  name: 'app',
  async created () {
    const res = await getTimeSharing({ assetId: 'CEI.HK', level: 'LV2' })
    console.log(res)
  }
})
</script>
<style lang="stylus">
html
  height: 100%;
body
  overflow-x: hidden;
  height: 100%;
  margin: 0;
  background-color: #132234;
  font-family: PingFangSC-Regular,Helvetica,Arial,sans-serif;
</style>
