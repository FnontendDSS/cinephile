import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Serials from '@/pages/Serials.vue'
import Search from '@/pages/Search.vue'
import Films from '@/pages/Films.vue'
import Movie from '@/pages/Movie.vue'
import Tv from '@/pages/Tv.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/search', name: 'Search', component: Search},
    {path: '/films', name: 'Films', component: Films},
    {path: '/serials', name: 'Serials', component: Serials},
    {path: '/films/:id', name: 'Movie', component: Movie},
    {path: '/serials/:id', name: 'Tv', component: Tv},
  ]
})
export default router
