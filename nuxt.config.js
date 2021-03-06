export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Front end development',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'html，JavaScript，css，vue等相关知识' },
            { name: 'baidu-site-verification', content: 'code-a8Le5zjf6g' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css' },
            // {
            //     rel: 'stylesheet',
            //     href: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.1.0/build/styles/monokai-sublime.min.css',
            // },
        ],
        script: [
            // {
            //     src: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.1.0/build/highlight.min.js',
            // },
            // {
            //     src: '/js/highlight.js',
            // },
            // {
            //     src: 'https://cdn.jsdelivr.net/npm/prismjs@1.23.0/prism.js',
            // },
            // {
            //     src: 'https://cdn.jsdelivr.net/npm/prism@1.23.0/plugins/autoloader/prism-autoloader.min.js',
            // },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['element-ui/lib/theme-chalk/index.css', 'assets/css/public.scss', 'assets/css/markdown.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/element-ui'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/color-mode',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'zh_CN',
        },
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-vsc-dark-plus.css',
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },
    router: {
        base: '/',
    },
    target: 'server',
}
