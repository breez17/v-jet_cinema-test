export const getters = {
  movies: (state) => {
    return state.movies
  },
}

export const state = () => ({
  movies: [],
})

export const mutations = {
  set_movies (state, payload) {
    state.movies = payload
  },
}

export const actions = {
  async get_movies ({ commit }) {
    const { data } = await this.$axios.$get('/movies');
    await commit('set_movies', data)
  },
  async get_movie (store, id) {
    const { data } = await this.$axios.$get(`/movies?movie_id=${id}`);
    return data[0];
  }
}
