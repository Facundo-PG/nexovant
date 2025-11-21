<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const carouselImages = ref([
  import.meta.env.BASE_URL + "images/carousel-1.jpg",
  import.meta.env.BASE_URL + "images/carousel-2.webp",
  import.meta.env.BASE_URL + "images/carousel-3.png",
]);

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + carouselImages.value.length) %
    carouselImages.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section id="empresa" class="section-container">
    <div class="carousel-container">
      <transition-group name="fade" tag="div" class="carousel-slides">
        <img
          v-for="(image, index) in carouselImages"
          :key="image"
          :src="image"
          v-show="index === currentIndex"
          class="carousel-image"
          alt="Imagen de la empresa"
        />
      </transition-group>

      <button @click="prevSlide" class="carousel-control prev">‹</button>
      <button @click="nextSlide" class="carousel-control next">›</button>

      <div class="carousel-dots">
        <span
          v-for="(image, index) in carouselImages"
          :key="'dot-' + index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-subtitle">NUESTRA</h2>
        <h1 class="section-title">EMPRESA</h1>

        <p class="intro-text">
          Nexovant Ingeniería y Tecnología SRL es una empresa familiar con más
          de 20 años de experiencia en telecomunicaciones, fundada por padre e
          hijos. Su enfoque es brindar un trato cercano y personalizado,
          combinando la agilidad de una organización joven con la solidez del
          conocimiento acumulado para ofrecer soluciones confiables y un
          compromiso con la excelencia.
        </p>

        <div class="mision-vision-container">
          <div class="mision-vision-item">
            <h3>Misión</h3>
            <p>
              Ser el socio tecnológico de confianza para empresas del sector
              público y privado, entregando soluciones integrales de ingeniería y
              telecomunicaciones. Garantizamos un acompañamiento cercano y
              personalizado en cada proyecto, con un compromiso inquebrantable
              con la confiabilidad y la excelencia.
            </p>
          </div>
          <div class="mision-vision-item">
            <h3>Visión</h3>
            <p>
              Ser la empresa referente en el sector, reconocida por fusionar
              innovación y agilidad con la confianza y solidez de nuestra
              experiencia. Aspiramos a ser el socio estratégico preferido por
              clientes que valoran la excelencia y las soluciones tecnológicas
              que impulsan su crecimiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- CARRUSEL --- */
.carousel-container {
  position: relative;
  width: 100%;
  max-height: 450px;
  overflow: hidden;
}

.carousel-slides {
  position: relative;
  width: 100%;
  height: 450px;
}

.carousel-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

/* Botones izquierda/derecha */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: white;
  background: rgba(0,0,0,0.4);
  border: none;
  padding: 8px 14px;
  cursor: pointer;
  z-index: 10;
  border-radius: 8px;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

/* Puntos inferiores */
.carousel-dots {
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.dot {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.dot.active {
  background: #007bff;
  transform: scale(1.2);
}

/* --- TEXTO --- */
.content-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.text-content {
  max-width: 900px;
}

.section-subtitle {
  font-size: 22px;
  color: #007bff;
}

.section-title {
  font-size: 40px;
  margin-bottom: 20px;
}

.intro-text {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
}

/* Misión / Visión */
.mision-vision-container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.mision-vision-item {
  flex: 1 1 45%;
  background: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
}

.mision-vision-item h3 {
  margin-bottom: 10px;
  font-size: 20px;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .carousel-slides,
  .carousel-image {
    height: 280px;
  }

  .carousel-control {
    font-size: 2rem;
  }

  .mision-vision-item {
    flex: 1 1 100%;
  }
}
</style>
