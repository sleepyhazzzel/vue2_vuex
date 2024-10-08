export default {
  namespaced: true,
  state: {
    name: 'Adam Jahr',
    gender: ''
  },
  getters: {
    getName: state => state.name,
  },
  mutations: {
    setData(state, payload) {
      state.name = payload.name
      state.gender = payload.gender
    }
  }
}