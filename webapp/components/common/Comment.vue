<template>
  <div class="comment">
    <div class="comment-img">
      <img :src="comment.commentImg" v-if="comment.commentImg !== ''" alt="" />
      <div v-if="comment.commentImg == ''" class="comment-img-replace"></div>
    </div>
    <div class="comment-body">
      <div class="comment-name">
        <p>{{ comment.name }}</p>
      </div>
      <div class="comment-rating">
        <img
          v-if="comment.rating > 0"
          src="~/assets/icons/rating-star.svg"
          alt=""
        />
        <img
          v-if="comment.rating > 1"
          src="~/assets/icons/rating-star.svg"
          alt=""
        />
        <img
          v-if="comment.rating == 1"
          src="~/assets/icons/rating-star-blank.svg"
          alt=""
        />
        <img
          v-if="comment.rating > 2"
          src="~/assets/icons/rating-star.svg"
          alt=""
        />
        <img
          v-if="comment.rating == 1 || comment.rating == 2"
          src="~/assets/icons/rating-star-blank.svg"
          alt=""
        />
        <img
          v-if="comment.rating > 3"
          src="~/assets/icons/rating-star.svg"
          alt=""
        />
        <img
          v-if="comment.rating <= 3"
          src="~/assets/icons/rating-star-blank.svg"
          alt=""
        />
        <img
          v-if="comment.rating == 5"
          src="~/assets/icons/rating-star.svg"
          alt=""
        />
        <img
          v-if="comment.rating !== 5"
          src="~/assets/icons/rating-star-blank.svg"
          alt=""
        />
      </div>
      <div class="comment-text">
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comment: Object,
  },
};
</script>
<style lang="scss" scoped>
.comment {
  padding: 1rem;
  display: flex !important;
  &-img {
    width: 3.75rem;
    height: 3.75rem;
    margin-right: 1.25rem;
    img {
      width: 3.75rem;
      height: 3.75rem;
    }
    &-replace {
      background-color: #fff;
      border-radius: 50%;
      height: 3.75rem;
      width: 3.75rem;
    }
  }
  &-body {
    max-width: 90%;
  }
  &-name {
    color: #fff;
    font-style: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  &-text {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: #fff;
    line-height: 1.15rem;
  }
}
</style>