import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import './index.css'

const store = createPinia()
const app = createApp(App)

app.use(store).mount("#app")