<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app'
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
.stock-up {
  color: #f03a4f!important
}
</style>
