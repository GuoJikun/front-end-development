<template>
    <ul class="menu">
        <li v-for="item in data" :key="`${item.title}-${item.path}`" class="menu-item">
            <div class="menu-item-inner">
                <nuxt-link tag="div" :to="item.path">{{ item.title || item.path }}</nuxt-link>
                <span v-if="isChildren(item.children)" class="menu-item-icon">
                    <span class="menu-item-icon-inner"></span>
                </span>
            </div>
            <template v-if="isChildren(item.children)">
                <Menu :data="item.children"></Menu>
            </template>
        </li>
    </ul>
</template>

<script>
const typeOf = (value) => {
    return Object.prototype.toString.call(value).replace(/^\[object ([A-Z][a-z]+)\]$/, '$1')
}
export default {
    name: 'Menu',
    props: {
        data: {
            type: Array,
            default() {
                return []
            },
        },
    },
    methods: {
        isChildren(children) {
            if (typeOf(children) === 'Array' && children.length) {
                return true
            }
            return false
        },
    },
}
</script>

<style lang="scss" scoped>
.menu {
    padding: 4px 0;
    background-color: #fff;
    &-item {
        line-height: 30px;
        list-style: none;
        padding: 0 20px;
        &:hover > &-inner {
            color: var(--color-primary);
        }

        &-inner {
            position: relative;
            cursor: pointer;
        }
        &-icon {
            position: absolute;
            right: -16px;
            top: 9px;
            display: block;
            width: 12px;
            height: 12px;
            transition: transform 0.3s;
            overflow: hidden;
            &-inner {
                display: block;
                width: 28px;
                height: 28px;
                position: absolute;
                right: 9px;
                top: -8px;
                transform: rotateZ(135deg);
                border: 1px solid #666;
            }
        }
    }
}
</style>
