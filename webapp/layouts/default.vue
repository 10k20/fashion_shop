<template>
  <div class="container">
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
}

main {
  margin: 0 auto;
  position: relative;
}

input {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

textarea:focus,
input:focus {
  outline: none;
}
</style>
