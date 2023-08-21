import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'

const app = createApp(App)
// btn-more =========================================
import BtnMore from '@/components/BtnMore.vue'
app.component('BtnMore', BtnMore)
// actors ===========================================
import Actors from '@/components/Actors.vue'
app.component('Actors', Actors)

// icons =============================================
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,fab,far)
app.component('fa', FontAwesomeIcon)

// =============================================
app.use(store).use(router).mount('#app')