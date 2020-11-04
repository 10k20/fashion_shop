<template>
<div class='container'>
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
    }
};
</script>

<style lang="scss">
.container {
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
    margin: 0 auto;
    overflow: hidden;
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
