<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Importamos todos los componentes que podríamos mostrar
import Navbar from '../components/Navbar.vue';
import Contacto from '../components/Contacto.vue';
import NuestrosServicios from '../components/NuestrosServicios.vue';
import NuestraEmpresa from '../components/NuestraEmpresa.vue';
import NuestrosValores from '../components/NuestrosValores.vue';

const route = useRoute();

// 2. Creamos una variable de estado. 'empresa' será el valor por defecto.
const activeSection = ref('empresa');

// 3. Creamos una función que actualiza el estado cuando el Navbar emite el evento.
const setActiveSection = (section) => {
  activeSection.value = section;
};

// Verificar si hay una sección en los query parameters al montar
onMounted(() => {
  if (route.query.section) {
    activeSection.value = route.query.section;
  }
});
</script>

<template>
  <div>
    <!-- 4. Escuchamos el evento 'change-section' y llamamos a nuestra función -->
    <Navbar @change-section="setActiveSection" />
    
    <main>
      <!-- 5. Usamos v-if para mostrar solo el componente que coincida con el estado actual -->
      <NuestraEmpresa v-if="activeSection === 'empresa'" />
      <NuestrosValores v-if="activeSection === 'valores'" />
      <NuestrosServicios v-if="activeSection === 'servicios'" />
      <Contacto v-if="activeSection === 'contacto'" />
    </main>
  </div>
</template>

<style scoped>
main {
  padding-top: 70px; /* Mantenemos el espacio para el Navbar fijo */
}
</style>