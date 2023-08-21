import { createStore } from 'vuex'
import upcoming from '@/store/modules/upcoming'
import popular from '@/store/modules/popular'
import infoblock from '@/store/modules/infoblock'
import toprate from '@/store/modules/toprate'
import cinema from '@/store/modules/cinema'
import actors from '@/store/modules/actors'
import search from '@/store/modules/search'
import rec from '@/store/modules/rec'
import trailer from '@/store/modules/trailer'

export default createStore({
  state: {
    apiKey: 'ff73598636b772c5fca88d178c32f1a4',
    imgUrlOriginal: 'https://image.tmdb.org/t/p/original',
    imgUrlW500: 'https://image.tmdb.org/t/p/w500' 
  },
  modules: {
    upcoming,
    popular,
    infoblock,
    toprate,
    cinema,
    actors,
    search,
    rec,
    trailer
  }
})
