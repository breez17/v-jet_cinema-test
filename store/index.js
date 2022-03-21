export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('movies/get_movies')
    await dispatch('shows/get_shows')
  },
}
