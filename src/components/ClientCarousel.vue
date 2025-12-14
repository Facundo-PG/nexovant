<template>
  <div class="client-carousel-container">
    <button class="carousel-arrow left" @click="prevSlide">&#10094;</button>
    <div class="carousel-slide">
      <img :src="images[current]" :alt="altTexts[current]" class="carousel-img" />
    </div>
    <button class="carousel-arrow right" @click="nextSlide">&#10095;</button>
    <div class="carousel-dots">
      <span v-for="(img, idx) in images" :key="idx" class="dot" :class="{ active: idx === current }" @click="goToSlide(idx)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = [
  import.meta.env.BASE_URL + 'images/TPP.png',
  import.meta.env.BASE_URL + 'images/xgear.jpeg',
  import.meta.env.BASE_URL + 'images/PLETTAC.png',
];
const altTexts = [
  'Cliente TPP',
  'Cliente XGEAR',
  'Cliente PLETTAC',
];
const current = ref(0);
let intervalId = null;

function nextSlide() {
  current.value = (current.value + 1) % images.length;
}
function prevSlide() {
  current.value = (current.value - 1 + images.length) % images.length;
}
function goToSlide(idx) {
  current.value = idx;
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3500);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
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
</style>
