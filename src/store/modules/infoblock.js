export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3',
    movieId: null,
    tvId: null
  },
  mutations: {},
  getters: {},
  actions: {
    async getInfoBlock({state, rootState}, {category,itemId}){
      try {
        const query = await fetch(`${state.path}/${category}/${itemId}?api_key=${rootState.apiKey}&language=ru-RU`)
        const response = await query.json()
        if(category == 'movie'){
          state.movieId = response
        }else{
          state.tvId = response
        }
      } catch (error) {
        console.log('Ошибка в infoblock ' + error);
      }
    }
  },
}