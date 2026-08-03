<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const logoImage = import.meta.env.BASE_URL + 'images/logoDef.jpeg';
const isMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const goHome = () => {
  isMenuOpen.value = false;

  if (route.path === '/home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  router.push('/home').then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const scrollToSection = (sectionId) => {
  isMenuOpen.value = false;
  
  // Si no estamos en /home, navegar primero
  if (route.path !== '/home') {
    router.push('/home').then(() => {
      // Esperar un momento para que el DOM se actualice
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 70; // Altura del navbar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    });
  } else {
    // Ya estamos en /home, solo hacer scroll
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<template>
  <nav class="main-nav">
    <div class="nav-content">
      <router-link to="/home" class="logo-link" @click.prevent="goHome">
        <!-- Imagen desde /public/images (funciona en GitHub Pages) -->
        <img :src="logoImage" alt="Logo MELTECH OT" class="logo-image" />
        <div class="logo-copy">
          <span class="logo-name">MELTECH OT</span>
          <span class="logo-tag">Consultoría · IT · Telecom</span>
        </div>
      </router-link>

      <ul class="desktop-nav-links">
        <li><a href="#empresa" @click.prevent="scrollToSection('empresa')">Nuestra Empresa</a></li>
        <li><a href="#valores" @click.prevent="scrollToSection('valores')">Valores</a></li>
        <li><a href="#servicios" @click.prevent="scrollToSection('servicios')">Servicios</a></li>
        <li><a href="#contacto" @click.prevent="scrollToSection('contacto')">Contacto</a></li>
        <li><router-link to="/quienes-somos" @click="isMenuOpen = false">Nosotros</router-link></li>
      </ul>

      <button 
        class="hamburger-menu" 
        @click="toggleMenu"
        :class="{ 'is-active': isMenuOpen }"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="mobile-nav-links-container" :class="{ 'is-open': isMenuOpen }">
      <a href="#empresa" @click.prevent="scrollToSection('empresa')">Nuestra Empresa</a>
      <a href="#valores" @click.prevent="scrollToSection('valores')">Valores</a>
      <a href="#servicios" @click.prevent="scrollToSection('servicios')">Servicios</a>
      <a href="#contacto" @click.prevent="scrollToSection('contacto')">Contacto</a>
      <router-link to="/quienes-somos" @click="isMenuOpen = false">Nosotros</router-link>
    </div>
  </nav>
</template>

<style scoped>
.main-nav {
  position: fixed; top: 0; left: 0; width: 100%;
  background-color: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  z-index: 1000; padding: 0 40px;
  box-shadow: 0 2px 10px rgba(15, 37, 55, 0.08);
}
.nav-content {
  display: flex; justify-content: space-between; align-items: center;
  max-width: 1200px; margin: 0 auto; height: 70px;
}
.logo-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;
  padding: 6px 14px 6px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(15, 61, 94, 0.08);
  box-shadow: 0 3px 12px rgba(15, 37, 55, 0.06);
  transition: all 0.25s ease;
}
.logo-image {
  height: 40px;
  width: auto;
  max-width: 92px;
  object-fit: contain;
  border-radius: 12px;
  background: transparent;
  box-shadow: none;
  padding: 0;
  border: 0;
  display: block;
  transition: transform 0.2s ease, filter 0.2s ease;
}
.logo-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1;
  white-space: nowrap;
}
.logo-name {
  color: #0f2537;
  font-size: 0.98rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}
.logo-tag {
  color: #18a7b8;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.logo-link:hover .logo-image {
  transform: translateY(-1px);
  filter: drop-shadow(0 4px 10px rgba(24, 167, 184, 0.18));
}
.logo-link:hover {
  background: rgba(255, 255, 255, 0.92);
  border-color: rgba(24, 167, 184, 0.18);
  box-shadow: 0 6px 18px rgba(15, 37, 55, 0.08);
}
.desktop-nav-links {
  list-style: none; display: flex;
  margin: 0; padding: 0; gap: 30px;
}
.desktop-nav-links a {
  color: #0f2537; text-decoration: none; font-size: 1rem;
  padding: 5px 0; position: relative; transition: color 0.3s; cursor: pointer;
}
.desktop-nav-links a:hover { color: #18a7b8; }
.desktop-nav-links a::after {
  content: ''; position: absolute; width: 0; height: 2px; bottom: 0;
  left: 50%; transform: translateX(-50%);
  background-color: #5fe1d9; transition: width 0.3s ease-in-out;
}
.desktop-nav-links a:hover::after { width: 100%; }
.hamburger-menu, .mobile-nav-links-container {
  display: none;
}
@media (max-width: 768px) {
  .desktop-nav-links { display: none; }
  .logo-copy { display: none; }
  .hamburger-menu {
    display: block; background: transparent; border: none; cursor: pointer;
    padding: 10px; z-index: 1010;
  }
  .hamburger-menu span {
    display: block; width: 25px; height: 3px;
    background-color: #0f2537; margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }
  .hamburger-menu.is-active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .hamburger-menu.is-active span:nth-child(2) { opacity: 0; }
  .hamburger-menu.is-active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  .mobile-nav-links-container {
    display: flex; flex-direction: column;
    position: fixed; top: 70px; left: 0;
    width: 100%; background-color: rgba(255, 255, 255, 0.96);
    padding-bottom: 10px;
    box-shadow: 0 8px 16px rgba(15,37,55,0.12);
    border-bottom: 1px solid rgba(15, 61, 94, 0.12);
    transform: translateY(-120%); opacity: 0;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    pointer-events: none;
  }
  .mobile-nav-links-container.is-open {
    transform: translateY(0); opacity: 1; pointer-events: auto;
  }
  .mobile-nav-links-container a {
    color: #0f2537; text-decoration: none; font-size: 1.1rem;
    width: 100%; text-align: left;
    padding: 18px 40px;
    border-bottom: 1px solid rgba(15, 61, 94, 0.08);
    transition: background-color 0.2s ease;
  }
  .mobile-nav-links-container a:last-child { border-bottom: none; }
  .mobile-nav-links-container a:hover { background-color: rgba(24, 167, 184, 0.08); }
}
</style>