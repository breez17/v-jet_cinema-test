export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('movies/get_movies')
  },
}
