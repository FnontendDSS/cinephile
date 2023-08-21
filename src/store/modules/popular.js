export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3',
    movies: null,
    tvs: null
  },
  mutations: {},
  getters: {},
  actions: {
    async getPopular({state, rootState}, {category,page}){
      try {
        const query = await fetch(`${state.path}/${category}/popular?api_key=${rootState.apiKey}&language=ru-RU&page=${page}`)
        const response = await query.json()
        const res = response.results
        if(category == 'movie'){
          state.movies = res
        }else{
          state.tvs = res
        }
      } catch (error) {
        console.log('Ошибка в popular ' + error);
      }
    }
  },
}