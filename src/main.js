import { createApp } from 'vue'
import App from './App.vue'

// 1. Importa el router que creamos
import router from './router'

const app = createApp(App)

// 2. Usa el router en tu aplicación
app.use(router)

app.mount('#app')