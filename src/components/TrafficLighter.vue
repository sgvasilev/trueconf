<template></template>

<script>
export default {
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
      })
    },

    renew() {
      return function () {
        this.sleep(this.timerDuration[this.i]).then(() => {
          this.$router.push({
            name: this.name,
            params: {
              isActive: this.name,
              direction: this.direction,
              time: this.time,
            },
          })
          if (this.steps[this.i] === "red") {
            this.direction = "forwards"
            this.name = this.steps[this.i]
            this.i += 1
          } else if (this.steps[this.i] === "green") {
            this.direction = "backwards"
            this.name = this.steps[this.i]
            this.i -= 1
          } else if (this.direction === "forwards") {
            this.name = this.steps[this.i]
            this.i += 1
          } else {
            this.name = this.steps[this.i]
            this.i -= 1
          }
          this.startLoop()
        })
      }
    },
  },
  data() {
    return {
      steps: ["red", "yellow", "green"],
      timerDuration: [500, 500, 500],
      direction: "forwards",
      name: "green",
      startLoop: this.renew(),
      i: 0,
    }
  },
  mounted() {
    if (localStorage.name && localStorage.direction && localStorage.time) {
      this.direction = localStorage.direction
      this.name = localStorage.name
      this.time = localStorage.time
      this.$router.push({
        name: this.name,
        params: {
          isActive: this.name,
          direction: this.direction,
          time: this.time,
        },
      })
    } else {
      localStorage.name = this.name
      localStorage.direction = this.direction
      localStorage.time = this.time
    }

    this.startLoop()
  },
  beforeUnmount() {
    localStorage.name = "green"
  },
}
</script>

<style lang="css" scoped></style>
