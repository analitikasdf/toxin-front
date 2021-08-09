import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vClickOutside from "click-outside-vue3"


import 'animate.css'
import 'normalize.css'
import '@vueform/toggle/themes/default.css'
// import '@vueform/slider/themes/default.css'

import 'swiper/swiper.min.css';

import "swiper/components/pagination/pagination.min.css"

createApp(App)
	.use(store)
	.use(router)
	.use(vClickOutside)
	.mount('#app')
