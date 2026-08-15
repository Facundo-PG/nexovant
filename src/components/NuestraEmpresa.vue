<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Rutas dinámicas para las imágenes del carrusel
const carouselImages = ref([
  import.meta.env.BASE_URL + "images/carousel-1.jpg",
  import.meta.env.BASE_URL + "images/carousel-2.jpg",
  import.meta.env.BASE_URL + "images/carousel-3.jpg",
]);
const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => { currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length; };
const goToSlide = (index) => { currentIndex.value = index; };

onMounted(() => { intervalId = setInterval(nextSlide, 5000); });
onUnmounted(() => { clearInterval(intervalId); });

// Imágenes de clientes para la grilla
const clientImages = [
  import.meta.env.BASE_URL + 'images/PLETTAC.png',
  import.meta.env.BASE_URL + 'images/XGnetworks.jpeg',
  import.meta.env.BASE_URL + 'images/TPP.png',
  import.meta.env.BASE_URL + 'images/mcsa.jpeg',
  import.meta.env.BASE_URL + 'images/CEAMSE.png',
  import.meta.env.BASE_URL + 'images/Caminodelbuenayre.jpeg',
];
const clientAltTexts = [
  'Cliente PLETTAC',
  'Cliente XGEAR',
  'Cliente TPP',
  'Cliente MCSA',
  'Cliente CEAMSE',
  'Cliente Camino del Buen Ayre',
];
</script>

<template>
  <section id="empresa" class="section-container">
    
    <!-- El carrusel se mantiene como el primer elemento para ser el banner superior -->
    <div class="carousel-container" @click="nextSlide">
      <transition-group name="fade" tag="div" class="carousel-slides">
        <img 
          v-for="(image, index) in carouselImages"
          :key="image"
          :src="image"
          v-show="index === currentIndex"
          alt="Imagen de la empresa"
          :class="['carousel-image', `carousel-image-${index + 1}`]"
        />
      </transition-group>
      <div class="carousel-dots">
        <span
          v-for="(image, index) in carouselImages"
          :key="'dot-' + index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          class="dot"
        ></span>
      </div>
    </div>
    
    <!-- El contenido de texto ahora se posiciona debajo del carrusel -->
    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-subtitle">NUESTRA</h2>
        <h1 class="section-title">EMPRESA</h1>
        <p class="intro-text">
          Meltech OT se posiciona como un socio estratégico en consultoría, sistemas IT y telecomunicaciones. Aunque es una marca joven, está respaldada por profesionales con más de 20 años de experiencia en el rubro, aportando conocimiento técnico, visión actualizada y una lectura precisa de las necesidades del mercado, contamos con obras en provincias como Mendoza, Neuquén, San Juan, Córdoba, Rosario, Catamarca, Bahía Blanca y más. Esa combinación de trayectoria e innovación nos permite ofrecer soluciones eficientes, integrales y adaptadas a los desafíos de hoy.
        </p>
        
        <div class="empresa-highlights">
          <h4>Nuestra Esencia</h4>
          <ul class="highlights-list">
            <li><strong>Enfoque Humano:</strong> Trato cercano, personalizado y empático en cada proyecto.</li>
            <li><strong>Experiencia Comprobada:</strong> 5 años perfeccionando soluciones en consultoría tecnológica, sistemas IT y telecomunicaciones.</li>
            <li><strong>Innovación Continua:</strong> Incorporamos nuevas herramientas y metodologías para responder con soluciones actuales y eficientes.</li>
            <li><strong>Compromiso con la Calidad:</strong> Cuidamos cada detalle para asegurar resultados confiables, sostenibles y profesionales.</li>
          </ul>
        </div>

        <div class="empresa-highlights">
          <h4>Nuestro Compromiso</h4>
          <ul class="highlights-list">
            <li><strong>Soluciones Confiables:</strong> Desplegamos tecnología robusta y durable para optimizar su negocio.</li>
            <li><strong>Excelencia en Servicio:</strong> Superamos expectativas desde la consultoría inicial hasta la operación y el soporte continuo.</li>
            <li><strong>Agilidad Operativa:</strong> Respuesta rápida a las necesidades cambiantes del mercado.</li>
            <li><strong>Soporte Integral:</strong> Acompañamiento completo en todo el ciclo de vida del proyecto.</li>
          </ul>
        </div>

        <p class="closing-statement">
          <em>"Meltech OT es su socio estratégico, combinando la solidez del conocimiento técnico con la agilidad de la innovación. <strong>Nuestra experiencia es su mayor garantía.</strong>"</em>
        </p>
        <div class="mision-vision-container">
          <div class="mision-vision-item">
            <h3>Misión</h3>
            <p>
              Ser el socio tecnológico de confianza para empresas del sector público y privado, entregando soluciones integrales de consultoría, sistemas IT y telecomunicaciones. Garantizamos un acompañamiento cercano y personalizado en cada proyecto, con un compromiso inquebrantable con la confiabilidad y la excelencia.
            </p>
          </div>
          <div class="mision-vision-item">
            <h3>Visión</h3>
            <p>
              Ser la marca referente en el sector, reconocida por fusionar innovación y agilidad con la confianza y solidez de nuestra experiencia. Aspiramos a ser el socio estratégico preferido por clientes que valoran la consultoría experta, los sistemas IT robustos y las soluciones de telecomunicaciones que impulsan su crecimiento.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Clientes destacados en grilla horizontal -->
    <div class="clientes-grid-wrapper">
        <div class="text-content clientes-titulo">
          <h2 class="section-subtitle">CONFIAN EN NOSOTROS</h2>
          <h1 class="section-title">NUESTROS CLIENTES</h1>
          <p class="intro-text">Empresas y organizaciones que eligieron nuestra experiencia y compromiso para potenciar sus proyectos.</p>
        </div>
      <div class="clientes-grid">
        <div class="cliente-logo" v-for="(img, idx) in clientImages" :key="idx">
          <img :src="img" :alt="clientAltTexts[idx]" class="cliente-img-uniforme" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fuerza el mismo tamaño exacto para todas las imágenes de clientes, sin importar el aspecto original */
.cliente-img-uniforme {
  width: 110px;
  height: 70px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  filter: grayscale(0.2) contrast(1.1);
  transition: filter 0.2s;
}
.cliente-logo:hover .cliente-img-uniforme {
  filter: grayscale(0) contrast(1.2) drop-shadow(0 2px 8px rgba(24, 167, 184, 0.8));
}
/* MODIFICADO: La sección ya no tiene padding horizontal para permitir el carrusel full-width */
.section-container {
  position: relative;
  background: linear-gradient(180deg, #f6f2ea 0%, #eef2f5 55%, #e8f6f5 100%);
  min-height: 100vh; /* Cambiar a min-height para permitir contenido más largo */
  padding-bottom: 40px; /* Agregar padding inferior para evitar corte de contenido */
  box-sizing: border-box;
}

.carousel-container {
  width: 100%;
  height: 65vh;
  max-height: 700px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.carousel-slides { width: 100%; height: 100%; position: relative; background-color: #d9eef1; }
.carousel-image { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  position: absolute; 
  top: 0; 
  left: 0;
}

/* Posicionamiento específico para cada imagen del carousel */
.carousel-image-1,
.carousel-image-2,
.carousel-image-3 {
  object-position: center top; /* Todas las imágenes: mostrar parte superior */
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.8s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.carousel-dots { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 10; }
.dot { width: 12px; height: 12px; border-radius: 50%; background-color: rgba(255, 255, 255, 0.6); cursor: pointer; transition: background-color 0.3s ease; }
.dot.active { background-color: white; }

/* MODIFICADO: El wrapper ahora añade el espacio vertical y horizontal para el texto */
.content-wrapper {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 40px; /* Espacio arriba/abajo y a los lados de la tarjeta */
  box-sizing: border-box;
  /* ELIMINADO: El margin-top negativo que causaba la superposición */
}

/* Card blanca con efectos elegantes */
.text-content {
  background-color: rgba(255, 255, 255, 0.98);
  color: #333;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.25);
  width: 100%; 
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

/* Efecto hover principal */
.text-content:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 60px rgba(138, 43, 226, 0.3);
  border-color: rgba(138, 43, 226, 0.2);
  background-color: rgba(255, 255, 255, 1);
}

/* Efecto de brillo diagonal que se mueve al hover */
.text-content::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(95, 225, 217, 0.12), transparent);
  transform: rotate(45deg);
  transition: transform 0.6s ease;
  z-index: 1;
  opacity: 0;
}

.text-content:hover::before {
  transform: rotate(45deg) translate(50%, 50%);
  opacity: 1;
}

/* Asegurar que el contenido esté por encima del efecto */
.text-content > * {
  position: relative;
  z-index: 2;
}

.section-subtitle { 
  font-size: 1.5rem; 
  font-weight: 300; 
  color: #18a7b8; 
  
}

.section-title { 
  font-size: 3.5rem; 
  font-weight: 700; 
  margin-bottom: 20px;
  color: #18a7b8
}

/* Efecto hover en títulos */
.text-content:hover .section-subtitle {
  color: #5fe1d9;
}

.text-content:hover .section-title {
  color: #18a7b8;
}

.intro-text { 
  font-size: 1.1rem; 
  line-height: 1.6; 
  border-bottom: 1px solid #e0e0e0; 
  padding-bottom: 20px; 
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.text-content:hover .intro-text {
  border-bottom-color: rgba(95, 225, 217, 0.3);
  color: #222;
}

/* Estilos para las viñetas */
.empresa-highlights {
  margin-bottom: 2rem;
}

.empresa-highlights h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  border-left: 4px solid #3498db;
  padding-left: 15px;
  transition: all 0.3s ease;
}

.text-content:hover .empresa-highlights h4 {
  color: #5fe1d9;
  border-left-color: #5fe1d9;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights-list li {
  position: relative;
  padding: 8px 0 8px 30px;
  margin-bottom: 12px;
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.highlights-list li::before {
  content: "▶";
  position: absolute;
  left: 0;
  top: 8px;
  color: #3498db;
  font-size: 0.8rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.text-content:hover .highlights-list li::before {
  color: #5fe1d9;
  transform: translateX(3px);
}

.text-content:hover .highlights-list li {
  color: #333;
  transform: translateX(5px);
}

.highlights-list li strong {
  color: #2c3e50;
  font-weight: 600;
  transition: color 0.3s ease;
}

.text-content:hover .highlights-list li strong {
  color: #18a7b8;
}

.closing-statement {
  font-size: 1rem;
  color: #2c3e50;
  text-align: center;
  background: linear-gradient(135deg, #f7fbfc 0%, #d9f4f5 100%);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #3498db;
  margin-top: 2rem;
  transition: all 0.3s ease;
}

.text-content:hover .closing-statement {
  background: linear-gradient(135deg, #e8fbfc 0%, #d9f4f5 100%);
  border-left-color: #18a7b8;
  color: #0f3d5e;
}

.mision-vision-container { 
  display: flex; 
  gap: 30px; 
}

.mision-vision-item { 
  flex: 1;
  transition: transform 0.3s ease;
}

.mision-vision-item:hover {
  transform: translateY(-3px);
}

.mision-vision-item h3 { 
  font-size: 1.6rem; 
  color: #18a7b8; 
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.mision-vision-item:hover h3 {
  color: #f2b15c;
  text-shadow: 0 2px 4px rgba(24, 167, 184, 0.2);
}

.mision-vision-item p { 
  font-size: 1rem; 
  line-height: 1.6; 
  color: #444;
  transition: color 0.3s ease;
}

.mision-vision-item:hover p {
  color: #222;
}

.clientes-grid-wrapper {
  margin: 3.5rem auto 0 auto;
  text-align: center;
  max-width: 900px;
  background: linear-gradient(120deg, #f7fbfc 60%, #d9f4f5 100%);
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(44,44,84,0.10);
  padding: 2.2rem 1rem 2.7rem 1rem;
}
.clientes-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f3d5e;
  margin-bottom: 2.1rem;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px #e0e7ff;
}
.clientes-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
}
.cliente-logo {
  flex: 1 1 180px;
  max-width: 240px;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(44,44,84,0.10);
  padding: 1.2rem 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.cliente-logo:hover {
  transform: scale(1.07) translateY(-6px);
  box-shadow: 0 8px 32px rgba(24, 167, 184, 0.8);
}
.cliente-logo img {
  max-width: 170px;
  max-height: 90px;
  object-fit: contain;
  filter: grayscale(0.2) contrast(1.1);
  transition: filter 0.2s;
}
.cliente-logo:hover img {
  filter: grayscale(0) contrast(1.2) drop-shadow(0 2px 8px rgba(24, 167, 184, 0.8));
}
@media (max-width: 700px) {
  .clientes-grid {
    gap: 1.2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cliente-logo {
    padding: 0.7rem 0.5rem;
    min-width: 0;
    max-width: 70px;
    flex: 1 1 0;
  }
  .cliente-logo img {
    max-width: 60px;
    max-height: 40px;
    width: 100%;
    height: auto;
  }
}
@media (max-width: 900px) {
  .section-title { font-size: 2.8rem; }
}

@media (max-width: 768px) {
  .carousel-container {
    height: 40vh; /* Reducir más para dar espacio al texto */
  }
  .content-wrapper {
    padding: 20px 15px; /* Menos padding en móvil */
  }
  .text-content {
    padding: 25px; /* Menos padding interno */
  }
  .mision-vision-container {
    flex-direction: column;
    gap: 20px;
  }
  .section-title { font-size: 2.2rem; }
  .intro-text { font-size: 1rem; }
  
  /* Estilos responsivos para viñetas */
  .empresa-highlights h4 {
    font-size: 1.1rem;
    padding-left: 12px;
  }
  .highlights-list li {
    font-size: 0.9rem;
    padding-left: 25px;
  }
  .closing-statement {
    font-size: 0.95rem;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 35vh; /* Aún más pequeño en móviles */
  }
  .content-wrapper {
    padding: 15px 10px;
  }
  .text-content {
    padding: 20px;
  }
  .section-title {
    font-size: 1.8rem;
  }
  .section-subtitle {
    font-size: 1.2rem;
  }
  .intro-text {
    font-size: 0.9rem;
  }
  .mision-vision-item h3 {
    font-size: 1.3rem;
  }
  .mision-vision-item p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  /* Estilos móvil para viñetas */
  .empresa-highlights {
    margin-bottom: 1.5rem;
  }
  .empresa-highlights h4 {
    font-size: 1rem;
    padding-left: 10px;
  }
  .highlights-list li {
    font-size: 0.85rem;
    padding-left: 22px;
    margin-bottom: 10px;
  }
  .highlights-list li::before {
    font-size: 0.7rem;
  }
  .closing-statement {
    font-size: 0.9rem;
    padding: 12px;
  }
}

@media (max-width: 320px) {
  .carousel-container {
    height: 30vh;
  }
  .content-wrapper {
    padding: 10px 8px;
  }
  .text-content {
    padding: 15px;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .intro-text {
    font-size: 0.85rem;
  }
  .mision-vision-item h3 {
    font-size: 1.1rem;
  }
  .mision-vision-item p {
    font-size: 0.85rem;
  }
  .dot {
    width: 8px;
    height: 8px;
  }
}
</style>