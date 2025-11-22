<script setup>
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import QuienesSomos from '../components/QuienesSomos.vue';

const router = useRouter();

// Función para manejar cambios de sección desde el navbar
const handleSectionChange = (section) => {
  // Navegar a la home y pasar la sección como query parameter
  router.push({ 
    path: '/home', 
    query: { section: section } 
  });
};
</script>

<template>
  <div>
    <Navbar @change-section="handleSectionChange" />
    
    <main>
      <QuienesSomos />
    </main>
  </div>
</template>

<style scoped>
main {
  padding-top: 70px; /* Espacio para el Navbar fijo */
}
</style>