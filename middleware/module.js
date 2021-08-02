function getModuleName(path) {
    const modules = ['basic', 'component', 'data-structure', 'other']
    const pathArr = path.split('/')
    const moduleName = pathArr[1]
    if (modules.includes(moduleName)) {
        return moduleName
    } else {
        return null
    }
}

export default function ({ route, store }) {
    const moduleName = getModuleName(route.path)
    store.commit('module', moduleName)
    return { route, store }
}
