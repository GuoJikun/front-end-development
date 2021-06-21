<template>
    <div class="tip">
        <p v-if="$slots.title" class="tip-title">
            <slot name="title">{{ title }}</slot>
        </p>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default() {
                return ''
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.tip {
    display: block;
    font-size: 13px;
    background-color: #eaeaea;
    padding: 0.7rem 1.4rem;
    border-radius: 4px;
    &-title {
        font-size: 14px;
    }
}
</style>
