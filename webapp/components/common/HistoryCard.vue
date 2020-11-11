<template>
  <div class="history-card-wrapper">
    <div class="history-card-img">
      <img :src="historyCardImg" alt="" />
    </div>
    <div class="history-card-title">
      {{ historyCardTitle }}
    </div>
    <div class="history-card-date">
      {{ historyCardDate }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    historyCardImg: String,
    historyCardTitle: String,
    historyCardDate: String,
  },
};
</script>
<style lang="scss" scoped>
.history-card-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  .history-card-img {
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 24rem;
      transition: 0.2s ease-in-out;
    }
    img:hover {
      transform: scale(1.2);
    }
  }
  .history-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .history-card-date {
    font-size: 0.875rem;
  }
}
</style>