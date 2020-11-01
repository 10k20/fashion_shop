<template>
<footer>
    <div>
        <div>
            <div>
                <a href="https://www.instagram.com/explore/tags/swrus/">#swrus</a>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
</script>

<style lang="scss">
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
    padding: 1.5em 1em;
}

.footer {
    .container {
        padding: 2em 1em;
    }
}

@include for-mobile-only {}
</style>
