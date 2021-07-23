<template>
    <div class="color-mode-picker" @click="modeClick">{{ mode }}</div>
</template>

<script>
export default {
    data() {
        return {
            mode: 'light',
        }
    },
    watch: {
        mode: {
            handler(val) {
                const body = document.querySelector('html')
                if (val === 'light') {
                    body.setAttribute('class', 'light-mode')
                } else {
                    body.setAttribute('class', 'dark-mode')
                }
            },
        },
    },
    methods: {
        modeClick() {
            if (this.mode === 'light') {
                this.mode = 'dark'
            } else {
                this.mode = 'light'
            }
        },
    },
}
</script>

<style scoped>
.color-mode-picker {
    cursor: pointer;
}
</style>
