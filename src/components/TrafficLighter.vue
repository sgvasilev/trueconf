<template></template>

<script>
import { useLocalStorage } from "../hooks/useLocalStorage"
export default {
  data() {
    return {
      listener: () => {},
    }
  },
  mounted() {
    this.$router.push({
      name: "green",
      params: {
        direction: "backwards",
        isActive: "green",
        time: 2,
      },
    })
    this.listener = useLocalStorage(this.$router)
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.listener)
  },
}
</script>
<style lang="css" scoped></style>
