<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// Video portada desde public usando BASE_URL dinámico
const coverVideo = import.meta.env.BASE_URL + 'video/portada.mp4';
const router = useRouter();
const imageOpacity = ref(0); // Iniciar con opacidad 0

// Guardar referencia a la función para poder removerla después
const preventTouchMove = (e) => e.preventDefault();

// Control dinámico del scroll y efectos de animación
onMounted(() => {
  // Ocultar scroll solo cuando este componente está activo
  try {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', preventTouchMove, { passive: false });
  } catch (error) {
    console.warn('Error setting overflow:', error);
  }
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (imageOpacity.value !== null) {
        imageOpacity.value = 1;
      }
    }, 100);
    setTimeout(() => {
      if (imageOpacity.value !== null) {
        imageOpacity.value = 0;
      }
    }, 1700);
    setTimeout(() => {
      try {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventTouchMove, { passive: false });
        router.push('/home');
      } catch (error) {
        console.warn('Error navigating:', error);
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventTouchMove, { passive: false });
        window.location.href = '/home';
      }
    }, 3000);
  });
});

onUnmounted(() => {
  // Restaurar scroll cuando se sale de este componente
  try {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.removeEventListener('touchmove', preventTouchMove, { passive: false });
  } catch (error) {
    console.warn('Error restoring overflow:', error);
  }
});
</script>

<template>
  <div class="landing-container">
    <video
      class="background-video"
      :src="coverVideo"
      :style="{ opacity: imageOpacity }"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/images/portada.png"
    ></video>
    <!-- Splash screen con efectos de fade-in y fade-out -->
  </div>
</template>

<style scoped>

/* CONTENEDOR PRINCIPAL */
.landing-container {
  position: relative;
  height: 100vh; /* Fallback para navegadores que no soportan dvh */
  height: 100dvh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch; /* Para iOS */
  touch-action: none; /* Prevenir gestos táctiles */
}


/* BACKGROUND VIDEO CON ANIMACIÓN */
.background-video {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  min-height: 100dvh;
  max-height: 100dvh;
  object-fit: cover;
  transform: translateX(-50%);
  z-index: -1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  opacity: 0; /* Iniciar invisible, se controla desde Vue */
}
@media (max-width: 700px) {
  .landing-container {
    height: 100dvh;
    min-height: 100dvh;
    max-height: 100dvh;
    width: 100vw;
    overflow: hidden;
  }
  .background-video {
    position: absolute;
    left: 50%;
    width: 100vw;
    height: 100dvh;
    min-height: 100dvh;
    max-height: 100dvh;
    object-fit: cover;
    transform: translateX(-50%);
  }
}

/* Asegúrate de que el body y html no tengan márgenes */
:global(body, html) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* Splash screen con efectos de fade-in y fade-out automáticos */
/*Timeline:
   0s - 0.1s: Imagen invisible
   0.1s - 1.1s: Fade-in (encendido gradual)
   1.1s - 2.5s: Imagen visible completa
   2.5s - 3.5s: Fade-out (apagado gradual)
   3.5s: Redirección a Nuestra Empresa
*/
</style>

