<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


// Rutas dinámicas para las imágenes del carrusel principal (banner superior)
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
const clientImages = [
        import.meta.env.BASE_URL + 'images/TPP.png',
        import.meta.env.BASE_URL + 'images/xgear.jpeg',
        import.meta.env.BASE_URL + 'images/PLETTAC.png',
      ];
      const clientAltTexts = [
        'Cliente TPP',
        'Cliente XGEAR',
        'Cliente PLETTAC',
      ];
      const clientCurrent = ref(0);
      let clientIntervalId = null;

      function nextClientSlide() {
        clientCurrent.value = (clientCurrent.value + 1) % clientImages.length;
      }
      function prevClientSlide() {
        clientCurrent.value = (clientCurrent.value - 1 + clientImages.length) % clientImages.length;
      }
      function goToClientSlide(idx) {
        clientCurrent.value = idx;
      }

      onMounted(() => {
        intervalId = setInterval(nextSlide, 5000);
        clientIntervalId = setInterval(nextClientSlide, 3500);
      });
      onUnmounted(() => {
        clearInterval(intervalId);
        clearInterval(clientIntervalId);
      });
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
          Nexovant Ingeniería y Tecnología srl se posiciona como un referente de solidez y confiabilidad en el sector de las telecomunicaciones. Aunque es una empresa joven, está respaldada por más de <strong>20 años</strong> de presencia activa en el rubro, aportando un profundo conocimiento técnico y una visión actualizada de las necesidades del mercado. Esta combinación de experiencia acumulada e innovación constante nos permite ofrecer soluciones eficientes, integrales y adaptadas a los desafíos de hoy.
        </p>
        
        <div class="empresa-highlights">
          <h4>Nuestra Esencia</h4>
          <ul class="highlights-list">
            <li><strong>Tradición Familiar:</strong> Fundada bajo la alianza entre padre e hijos, combinando sabiduría acumulada con visión innovadora.</li>
            <li><strong>Enfoque Humano:</strong> Trato cercano, personalizado y empático en cada proyecto.</li>
            <li><strong>Experiencia Comprobada:</strong> Más de dos décadas perfeccionando soluciones en las telecomunicaciones.</li>
          </ul>
        </div>

        <div class="empresa-highlights">
          <h4>Nuestro Compromiso</h4>
          <ul class="highlights-list">
            <li><strong>Soluciones Confiables:</strong> Desplegamos tecnología robusta y durable para optimizar su negocio.</li>
            <li><strong>Excelencia en Servicio:</strong> Superamos expectativas desde la consultoría hasta el soporte continuo.</li>
            <li><strong>Agilidad Operativa:</strong> Respuesta rápida a las necesidades cambiantes del mercado.</li>
            <li><strong>Soporte Integral:</strong> Acompañamiento completo en todo el ciclo de vida del proyecto.</li>
          </ul>
        </div>

        <p class="closing-statement">
          <em>"Nexovant es su socio estratégico, combinando la solidez del conocimiento familiar con la agilidad de la innovación. <strong>Nuestra experiencia es su mayor garantía.</strong>"</em>
        </p>
        <div class="mision-vision-container">
          <div class="mision-vision-item">
            <h3>Misión</h3>
            <p>
              Ser el socio tecnológico de confianza para empresas del sector público y privado, entregando soluciones integrales de ingeniería y telecomunicaciones. Garantizamos un acompañamiento cercano y personalizado en cada proyecto, con un compromiso inquebrantable con la confiabilidad y la excelencia.
            </p>
          </div>
          <div class="mision-vision-item">
            <h3>Visión</h3>
            <p>
              Ser la empresa referente en el sector, reconocida por fusionar innovación y agilidad con la confianza y solidez de nuestra experiencia. Aspiramos a ser el socio estratégico preferido por clientes que valoran la excelencia y las soluciones tecnológicas que impulsan su crecimiento.
            </p>
          </div>
        </div>
        <!-- Carousel de clientes -->
        <div class="clientes-carousel-wrapper">
          <h3 class="clientes-title">Nuestros Clientes</h3>
          <div class="client-carousel-container">
            <button class="carousel-arrow left" @click="prevClientSlide">&#10094;</button>
            <div class="carousel-slide">
              <img :src="clientImages[clientCurrent]" :alt="clientAltTexts[clientCurrent]" class="carousel-img" />
            </div>
            <button class="carousel-arrow right" @click="nextClientSlide">&#10095;</button>
            <div class="carousel-dots">
              <span v-for="(img, idx) in clientImages" :key="idx" class="dot" :class="{ active: idx === clientCurrent }" @click="goToClientSlide(idx)"></span>
            </div>
          </div>
        </div>
      Carousel de clientes
      </div>
    </div>
  </section>
</template>

<style scoped>
/* MODIFICADO: La sección ya no tiene padding horizontal para permitir el carrusel full-width */
.section-container {
  position: relative;
  background-color: #2c2c54;
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

.carousel-slides { width: 100%; height: 100%; position: relative; background-color: #1a1a2e; }
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
  background: linear-gradient(45deg, transparent, rgba(138, 43, 226, 0.1), transparent);
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
  color: #555; 
  transition: color 0.3s ease;
}

.section-title { 
  font-size: 3.5rem; 
  font-weight: 700; 
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

/* Efecto hover en títulos */
.text-content:hover .section-subtitle {
  color: #8A2BE2;
}

.text-content:hover .section-title {
  color: #6A1B9A;
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
  border-bottom-color: rgba(138, 43, 226, 0.3);
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
  color: #8A2BE2;
  border-left-color: #8A2BE2;
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
  color: #8A2BE2;
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
  color: #6A1B9A;
}

.closing-statement {
  font-size: 1rem;
  color: #2c3e50;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #3498db;
  margin-top: 2rem;
  transition: all 0.3s ease;
}

.text-content:hover .closing-statement {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-left-color: #8A2BE2;
  color: #4A148C;
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
  color: #8A2BE2; 
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.mision-vision-item:hover h3 {
  color: #6A1B9A;
  text-shadow: 0 2px 4px rgba(138, 43, 226, 0.2);
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

.section-container::-webkit-scrollbar { width: 10px; }
.section-container::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.1); }
.section-container::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.5); border-radius: 10px; }
.section-container::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.7); }

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

    /* Carousel de clientes */
      .client-carousel-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 320px;
        margin: 2rem auto 1.5rem auto;
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 2px 16px rgba(0,0,0,0.08);
        padding: 1.5rem 1rem 2.5rem 1rem;
      }
      .carousel-slide {
        width: 250px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .carousel-img {
        max-width: 220px;
        max-height: 100px;
        object-fit: contain;
        transition: opacity 0.5s;
      }
      .carousel-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.1);
        border: none;
        font-size: 2rem;
        cursor: pointer;
        z-index: 2;
        padding: 0.2em 0.6em;
        border-radius: 50%;
        color: #333;
        transition: background 0.2s;
      }
      .carousel-arrow.left {
        left: 10px;
      }
      .carousel-arrow.right {
        right: 10px;
      }
      .carousel-arrow:hover {
        background: rgba(0,0,0,0.2);
      }
      .carousel-dots {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
      }
      .dot {
        height: 12px;
        width: 12px;
        margin: 0 4px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.3s;
        cursor: pointer;
      }
      .dot.active {
        background-color: #333;
      }
      /* Carousel de clientes */
      .clientes-carousel-wrapper {
        margin: 2.5rem auto 0 auto;
        text-align: center;
        max-width: 400px;
      }
      .clientes-title {
        font-size: 1.3rem;
        font-weight: 600;
        color: #2c2c54;
        margin-bottom: 0.5rem;
        letter-spacing: 0.5px;
      }
}
</style>