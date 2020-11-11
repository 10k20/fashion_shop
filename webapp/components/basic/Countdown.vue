<template>
  <div class="countdown">
    <div class="block" id="hours">
      <p class="digit">{{ hours | two_digits }}</p>
    </div>
    <p class="colon">:</p>
    <div class="block" id="minutes">
      <p class="digit">{{ minutes | two_digits }}</p>
    </div>
    <p class="colon">:</p>
    <div class="block" id="seconds">
      <p class="digit">{{ seconds | two_digits }}</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: String,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
};

Vue.filter("two_digits", (value) => {
  if (value < 0) {
    return "00";
  }
  if (value.toString().length <= 1) {
    return `0${value}`;
  }
  return value;
});
</script>
<style lang="scss" scoped>
.countdown {
  display: flex;
  font-size: 1.2rem;
  width: 12rem;
  justify-content: space-between;
  margin-left: 0.7rem;
  margin-top: 0.15rem;
}
.block {
  letter-spacing: 1.25rem;
}
.colon {
  color: #fff;
  transform: translateX(-0.55rem);
}
#hours {
  margin-left: 0.05rem;
}
#minutes {
  margin-left: 0.17rem;
}
#seconds {
  margin-left: 0.17rem;
}
</style>