<template>
  <div id="app-container">
    <router-view />
  </div>
</template>

<style> /* SIN 'scoped' */

/* Reseteo básico */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Regla para evitar el salto */
html {
  overflow-y: scroll;
}

/* Estilos fundamentales para el body */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #1a1a2e;
  color: #f0f0f0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Contenedor principal */
#app-container {
  width: 100%;
}

/* ========= ESTILOS PARA LA BARRA DE SCROLL (LA SOLUCIÓN) ========= */
/* Funciona en navegadores basados en WebKit (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 10px; /* Ancho del scrollbar */
}

/* El "riel" o fondo del scrollbar */
::-webkit-scrollbar-track {
  background: #1a1a2e; /* Hacemos que el fondo coincida con el de la página */
}

/* La barra de desplazamiento que se mueve */
::-webkit-scrollbar-thumb {
  background-color: #4a47a3; /* Un color de tu paleta que contraste sutilmente */
  border-radius: 10px; /* Bordes redondeados */
  border: 2px solid #1a1a2e; /* Un pequeño borde para crear un efecto flotante */
}

/* Efecto al pasar el mouse sobre la barra */
::-webkit-scrollbar-thumb:hover {
  background-color: #6a67ce;
}
/* =================================================================== */

</style>