import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vClickOutside from "click-outside-vue3"


import 'animate.css'
import 'normalize.css'
import '@vueform/toggle/themes/default.css'
createApp(App).use(store).use(router).use(vClickOutside).mount('#app')
