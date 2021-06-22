<template>
    <article id="markdown-wrap">
        <nuxt-content :document="article" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('data-structure', params.slug).fetch()

        return { article }
    },
}
</script>

<style lang="scss" scoped></style>
