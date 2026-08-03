<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  router.replace('/home');
});
</script>

<template>
  <div class="landing-container" aria-hidden="true"></div>
</template>

<style scoped>
.landing-container {
  min-height: 100vh;
  min-height: 100dvh;
  width: 100vw;
  background: linear-gradient(180deg, #f6f2ea 0%, #eef2f5 100%);
}

:global(body, html) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>

