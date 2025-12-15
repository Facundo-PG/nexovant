import { createRouter, createWebHistory } from 'vue-router';
// Asumiendo que tus vistas están en @/views/
import LandingView from '@/views/LandingView.vue'; 
import HomeView from '@/views/HomeView.vue'; // Ejemplo
import QuienesSomosView from '@/views/QuienesSomosView.vue';



const router = createRouter({
  // Usamos la base condicional para el historial.
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      // La ruta principal, que resuelve a /nexovant/
      path: '/', 
      name: 'Landing',
      component: LandingView 
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
    // Añade el resto de tus rutas aquí
  ]
});

export default router;