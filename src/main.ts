import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'


const store = createPinia()
const app = createApp(App)

app.use(store).mount("#app")