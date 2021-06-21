<template>
    <div class="layout">
        <header class="header">
            <div class="header-inner">
                <div>
                    <h1>前端小栈</h1>
                </div>
                <div class="header-nav">
                    <div class="header-nav-item">基础知识</div>
                    <div class="header-nav-item">组件</div>
                    <div class="header-nav-item">数据结构与算法</div>
                    <div class="header-nav-item header-nav-item-link">Github</div>
                </div>
            </div>
        </header>
        <div class="main">
            <div class="aside">
                <Menu :data="aside"></Menu>
            </div>
            <div class="content">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
function getAside(nav, moduleName) {
    let target = null
    nav.map((c) => {
        if (c.id === moduleName) {
            target = c.children
        }
        return c
    })
    return target
}
export default {
    middleware: ['module'],
    data() {
        return {
            nav: [],
            aside: [],
        }
    },
    async created() {
        const moduleName = this.$store.state.module
        const { nav } = await this.$content('setting').only(['nav']).fetch()
        const aside = getAside(nav, moduleName)
        this.nav = nav
        this.aside = aside
    },
}
</script>

<style lang="scss"></style>
