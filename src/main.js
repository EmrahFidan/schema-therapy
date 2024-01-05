import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// bu kısım ilk çalışan yerimiz ve burada id'si app olan div'e bağlanıyoruz
createApp(App).use(store).use(router).mount('#app')
