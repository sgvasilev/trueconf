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
    <div class="timer">timer</div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: String,
      required: false,
    },
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
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1024px;
  margin-top: 20px;
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

.timer {
  position: relative;
  left: 100px;
}
</style>
