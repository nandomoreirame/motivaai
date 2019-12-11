export const state = () => ({
  isLoading: false,
  phrase: {},
  phrases: []
})

const mutations = {
  toggleLoading (state, payload) {
    state.isLoading = !!payload
  },

  changePhrase (state, payload) {
    state.phrase = payload
  },

  changePhrases (state, payload) {
    state.phrases = payload
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
