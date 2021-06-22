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
        type: {
            type: String,
            default() {
                return 'info'
            },
            validator(value) {
                return ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
            },
        },
    },
}
</script>

<style lang="scss">
p + tip {
    margin-top: 20px;
}
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
