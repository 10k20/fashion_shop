<template>
  <div class="article">
    <div class="article-title">
      <p>{{ articleTitle }}</p>
    </div>
    <div class="article-text">
      <pre>{{ articleText }}</pre>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articleTitle: String,
    articleText: String,
  },
};
</script>
<style lang="scss" scoped>
.article {
  width: 32%;
  display: flex;
  flex-direction: column;
  &-title {
    font-style: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  &-text {
    pre {
      font-family: "Roboto", sans-serif;
      overflow-wrap: break-word;
      overflow: hidden;
    }
  }
}
</style>