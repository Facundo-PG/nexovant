<script setup>
// Componente de Servicios – Card blanca unificada con estilo de Nuestra Empresa
</script>

<template>
  <section id="servicios" class="section-container">
    <h2 class="section-subtitle text-center">NUESTROS</h2>
    <h1 class="section-title text-center">SERVICIOS</h1>
    <p class="text-center section-description">
      Nexovant Ingeniería y Tecnología SRL ofrece una cartera de servicios integral, desde la infraestructura física hasta la puesta en marcha y el soporte continuo.
    </p>

    <!-- GRID DE TARJETAS -->
    <div class="servicios-grid">
      <div class="service-card" v-for="item in ['OBRA CIVIL','FIBRA ÓPTICA','INSTALACIONES','GESTIÓN Y SOPORTE']" :key="item">
        <div class="card-inner">
          <div class="card-front">
            <div class="servicio-icon">
              <i class="icon-placeholder"></i>
            </div>
            <h3>{{ item }}</h3>
          </div>
          <div class="card-back">
            <p>Servicio especializado con estándares profesionales y foco en calidad.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD BLANCA (MISMO ESTILO QUE NUESTRA EMPRESA) -->
    <div class="servicios-descripcion-texto text-content card-blanca">
      <div class="servicios-titulo-extra text-center">
        <h2 class="section-subtitle">ÁREAS DE ESPECIALIZACIÓN</h2>
        <h1 class="section-title section-title-servicios">¿QUÉ HACEMOS?</h1>
        <p class="intro-text">Conocé en detalle los servicios y soluciones que ofrecemos para potenciar tu proyecto.</p>
      </div>

      <ul>
        <li><strong>Telecomunicaciones e Infraestructura</strong>
          <ul>
            <li>Tendidos de redes aéreas y subterráneas con obra civil asociada.</li>
            <li>Redes de fibra óptica:
              <ul>
                <li>Instalaciones FTTH</li>
                <li>Armado de nodos de telecomunicaciones</li>
                <li>Montaje de equipos activos y pasivos</li>
                <li>Fusión, medición y certificación completa de redes</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Seguridad y Sistemas Especiales</strong>
          <ul>
            <li>Instalación y configuración de cámaras IP y CCTV</li>
            <li>Integración de sistemas de monitoreo</li>
            <li>Cableado e infraestructura asociada</li>
          </ul>
        </li>
        <li><strong>Cableado y Redes</strong>
          <ul>
            <li>Cableado estructurado bajo normas internacionales.</li>
          </ul>
        </li>
        <li><strong>Ingeniería y Documentación Técnica</strong>
          <ul>
            <li>Relevamientos técnicos</li>
            <li>Diseño de soluciones a medida</li>
            <li>Planos y documentación profesional</li>
            <li>Soporte técnico especializado</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 80px 40px;
  background-color: #2c2c54;
}
.text-center { text-align: center; }
.section-subtitle {
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: 3px;
  margin-bottom: 10px;
}
.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #c9a7ff; /* violeta como en la imagen */
  margin-bottom: 20px;
}
.section-description { color: #eee; max-width: 800px; margin: 0 auto 50px; }

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card { height: 300px; perspective: 1000px; }
.card-inner {
  width: 100%; height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.service-card:hover .card-inner { transform: rotateY(180deg); }
.card-front, .card-back {
  position: absolute;
  width: 100%; height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
}
.card-front {
  background: rgba(255,255,255,0.12);
  color: #fff;
  flex-direction: column;
  gap: 15px;
}
.card-back { background: linear-gradient(135deg,#8A2BE2,#bb86fc); transform: rotateY(180deg); color: #fff; }

/* CARD BLANCA – MISMO ESTILO QUE EMPRESA */
.text-content {
  background: rgba(255,255,255,0.98);
  color: #333;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.25);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
}
.text-content:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 60px rgba(138,43,226,0.3);
}
.text-content::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: linear-gradient(45deg, transparent, rgba(138,43,226,0.12), transparent);
  transform: rotate(45deg);
  transition: transform 0.6s ease, opacity 0.6s ease;
  opacity: 0;
}
.text-content:hover::before {
  transform: rotate(45deg) translate(50%,50%);
  opacity: 1;
}
.text-content > * { position: relative; z-index: 2; }

.section-title-servicios { color: #2c2c54; }
.text-content:hover .section-title-servicios { color: #6A1B9A; }
.text-content:hover .section-subtitle { color: #8A2BE2; }

.card-blanca { max-width: 900px; margin: 60px auto 0; }

.icon-placeholder {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg,#8A2BE2,#bb86fc);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

</style>
