export const state = () => ({
    module: null,
})
export const mutations = {
    module(state, value) {
        state.module = value || null
    },
}
