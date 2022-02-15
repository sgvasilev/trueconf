<template>
  <div class="wrapper">
    <div class="lighter">
      <div class="lighter__section">
        <div
          class="lighter__unit lighter__unit_red"
          :class="[isActive == 'red' ? 'isActive_red' : 'noneActive']"
        ></div>
      </div>
      <div class="lighter__section">
        <div
          class="lighter__unit lighter__unit_yellow"
          :class="[isActive == 'yellow' ? 'isActive_yellow' : 'noneActive']"
        ></div>
      </div>
      <div class="lighter__section">
        <div
          class="lighter__unit lighter__unit_green"
          :class="[isActive == 'green' ? 'isActive_green' : 'noneActive']"
        ></div>
      </div>
    </div>

    <div class="timer">
      Времени до перехода: &nbsp;{{ time }}{{ isBlinking }}
    </div>
  </div>
</template>

<script>
import { loop } from "../hooks/useTimerChange"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useStartPosition } from "../hooks/useStartPosition"
import { useRouter } from "vue-router"
import anime from "animejs/lib/anime.es.js"

export default {
  computed: {
    isBlinking: function () {
      if (this.router.currentRoute.value.params.time < 3) {
        this.animate()
      }
    },
  },
  setup(props) {
    const router = useRouter()
    const { direction, time, name } = useStartPosition(router)
    return {
      router,
      direction,
      time,
      name,
    }
  },
  data() {
    return {
      listener: () => {},
      tempColor: "",
    }
  },
  methods: {
    animate() {
      if (this.isActive === "red") {
        this.tempColor = "#ff3b3b"
      } else if (this.isActive === "yellow") {
        this.tempColor = "#fffc3b"
      } else {
        this.tempColor = "#2ecc71"
      }
      let arr = [
        { background: "rgb(255,255,255)" },
        { background: `${this.tempColor}` },
      ]
      anime({
        easing: "easeOutExpo",
        duration: 250,
        targets: `.isActive_${this.isActive}`,
        keyframes: arr,
      })
    },
  },
  props: {
    isActive: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  mounted() {
    loop(this.$router, this.direction, this.time, this.name)
    this.listener = useLocalStorage(this.$router)
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.listener)
  },
}
</script>

<style lang="scss" scoped>
.noneActive {
  filter: grayscale(80%);
}
.isActive {
  &_red {
    opacity: 100;
  }
  &_green {
    opacity: 100;
  }
  &_yellow {
    opacity: 100;
  }
}

.wrapper {
  max-width: 1024px;
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1024px;
  margin-top: 20px;
  justify-content: space-evenly;
}
.lighter {
  border-radius: 10px;
  padding: 10px;
  border: 2px solid #0f1c3f;

  &__section {
    border-radius: 5px;
    border: 2px solid #0f1c3f;
    border-bottom: none;
    &:last-of-type {
      border: 2px solid #0f1c3f;
    }
  }
  &__unit {
    border: 0.1875em solid #0f1c3f;
    border-radius: 50%;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    height: 10em;
    width: 10em;
    &_red {
      background: #ff3b3b;
    }
    &_green {
      background: #2ecc71;
    }
    &_yellow {
      background: #fffc3b;
    }
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.timer {
  position: relative;
  left: 100px;
}
</style>
