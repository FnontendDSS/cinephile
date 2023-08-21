export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3',
    movieActors: null,
    tvActors: null
  },
  actions: {
    async getActors({state, rootState}, {category,id,count}){
      try {
        const query = await fetch(`${state.path}/${category}/${id}/credits?api_key=${rootState.apiKey}&language=ru-RU`)
        const response = await query.json()
        const res = response.cast
        const countActors = res.slice(0, count)
        if(category == 'movie'){
          state.movieActors = countActors
        }else{
          state.tvActors = countActors
        }
      } catch (error) {
        console.log('Ошибка в popular ' + error);
      }
    }
  },
}