import { defineConfig } from 'vite';
// Asumo que estás usando un framework como React o Vue, 
// si es así, debes importar el plugin correspondiente.
// Ejemplo para React:
// import react from '@vitejs/plugin-react';

// La ruta base debe coincidir con el nombre de tu repositorio en GitHub
const REPO_NAME = '/nexovant/'; 

export default defineConfig({
  // 1. Establecer la ruta base (Public Path)
  base: REPO_NAME, 
  
  // 2. Agregar plugins si usas frameworks (descomentar el tuyo)
  // plugins: [react()], 
  
  build: {
    // 3. Configuración para simplificar la estructura de archivos en el output (dist)
    // Esto hace que los archivos JS/CSS vayan directamente a la raíz de 'dist' 
    // y no a una subcarpeta 'dist/assets', previniendo errores 404.
    rollupOptions: {
      output: {
        // Le dice a Rollup (que usa Vite) que no use la carpeta 'assets'
        assetFileNames: `[name].[ext]`,
        chunkFileNames: `[name].[ext]`,
        entryFileNames: `[name].js`
      }
    }
  }
});