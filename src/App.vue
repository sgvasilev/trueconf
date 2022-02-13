<template>
  <router-view></router-view>
</template>

<script>
import TrafficLighter from "./components/TrafficLighter.vue"
export default {
  components: { TrafficLighter },
}
</script>

<style lang="css">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
