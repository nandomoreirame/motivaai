export const state = () => ({
  isLoading: false,
  phrase: {},
  phrases: [],
  heroBackground: 'linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%)'
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
  },

  changeBackground (state, payload) {
    state.heroBackground = payload
  }
}

export default {
  state,
  mutations
}
