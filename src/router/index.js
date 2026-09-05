import { createRouter, createWebHistory } from 'vue-router';
// Asumiendo que tus vistas están en @/views/
import LandingView from '@/views/LandingView.vue'; 
import HomeView from '@/views/HomeView.vue'; // Ejemplo
import QuienesSomosView from '@/views/QuienesSomosView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/', 
      redirect: '/home' // <--- Cambiamos 'component' por 'redirect'
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/quienes-somos',
      name: 'QuienesSomos',
      component: QuienesSomosView
    }
  ]
});

export default router;