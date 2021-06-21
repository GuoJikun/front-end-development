import 'highlight.js/styles/monokai.css' // 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
import Vue from 'vue'
import hlJs from 'highlight.js/lib/core'
hlJs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hlJs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hlJs.registerLanguage('c', require('highlight.js/lib/languages/c'))
hlJs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hlJs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
hlJs.registerLanguage('dos', require('highlight.js/lib/languages/dos'))
hlJs.registerLanguage('go', require('highlight.js/lib/languages/go'))
hlJs.registerLanguage('html', require('highlight.js/lib/languages/xml'))
hlJs.registerLanguage('http', require('highlight.js/lib/languages/http'))
hlJs.registerLanguage('java', require('highlight.js/lib/languages/java'))
hlJs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hlJs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hlJs.registerLanguage('lua', require('highlight.js/lib/languages/lua'))
hlJs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'))
hlJs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hlJs.registerLanguage('python', require('highlight.js/lib/languages/python'))
hlJs.registerLanguage('python-repl', require('highlight.js/lib/languages/python-repl'))
hlJs.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
hlJs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
hlJs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
hlJs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
hlJs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))

Vue.use({
    install: (Vue) => {
        // 自定义指令 v-highlight
        Vue.directive('highlight', {
            // 被绑定元素插入父节点时调用
            inserted(el) {
                const blocks = el.querySelectorAll('pre code')
                for (let i = 0; i < blocks.length; i++) {
                    hlJs.highlightBlock(blocks[i])
                }
            },
            // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
            componentUpdated(el) {
                const blocks = el.querySelectorAll('pre code')
                for (let i = 0; i < blocks.length; i++) {
                    hlJs.highlightBlock(blocks[i])
                }
            },
        })
    },
})
