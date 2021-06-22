<template>
    <div class="layout">
        <header class="header">
            <div class="header-inner">
                <div>
                    <h1>前端小栈</h1>
                </div>
                <div class="header-nav">
                    <template v-for="item in nav">
                        <a
                            v-if="isNetLink(item.path)"
                            :key="item.path"
                            :href="item.path"
                            class="header-nav-item header-nav-item-link"
                            >{{ item.title }}</a
                        >
                        <nuxt-link
                            v-else
                            :key="item.path"
                            :class="['header-nav-item', { 'header-nav-item-link': isNetLink(item.path) }]"
                            tag="a"
                            :to="item.path"
                            :target="isNetLink(item.path) ? '_blank' : '_self'"
                        >
                            {{ item.title }}
                        </nuxt-link>
                    </template>
                </div>
            </div>
        </header>
        <div class="main">
            <div v-if="isAside" class="aside">
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
        if (c.path === `/${moduleName}/`) {
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
            isAside: false,
        }
    },
    watch: {
        $route() {
            const moduleName = this.$store.state.module
            this.isAside = moduleName !== null
            const aside = getAside(this.nav, moduleName)
            this.aside = aside
        },
    },
    async created() {
        const moduleName = this.$store.state.module
        this.isAside = moduleName !== null
        const { nav } = await this.$content('setting').only(['nav']).fetch()
        const aside = getAside(nav, moduleName)
        this.nav = nav
        this.aside = aside
    },
    methods: {
        isNetLink(path) {
            return /^https?:\/\//.test(path)
        },
    },
}
</script>

<style lang="scss"></style>
