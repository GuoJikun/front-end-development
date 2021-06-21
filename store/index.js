export const state = () => ({
    module: 0,
})
export const mutations = {
    module(state, value) {
        state.module = value || null
    },
}
