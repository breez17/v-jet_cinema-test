export const getters = {
  shows: (state) => {
    return state.shows
  },
}

export const state = () => ({
  shows: [],
})

export const mutations = {
  set_shows (state, payload) {
    state.shows = payload
  },
}

export const actions = {
  async get_shows ({ commit }) {
    const { data } = await this.$axios.$get('/movieShows');
    await commit('set_shows', data);
  },
  async get_seats(store, params) {
    const { data } = await this.$axios.$get('/showPlaces', {
      params: {
        ...params
      }
    });

    return data;
  },
  async book_ticket (store, credentials) {
    await this.$axios.$post('/bookPlace', {
      ...credentials
    });
  }
}
