<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser'; // Usamos la librería moderna

// Estado del formulario
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(''); // 'success', 'error', o ''

// Función para enviar el formulario
const sendEmail = async () => {
  if (isSubmitting.value) return;
  
  // Validación básica
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    submitStatus.value = 'error';
    setTimeout(() => submitStatus.value = '', 3000);
    return;
  }
  
  isSubmitting.value = true;
  
  // IDs sacados de tus capturas de EmailJS
  const serviceID = 'service_up1u0e8'; 
  const templateID = 'template_9lyiw9w'; 
  const publicKey = '29GQbKzJxh6-Iz2jt'; // Tu Public Key corregida
    
  // Estos nombres deben coincidir con los {{ }} que pongas en tu template de EmailJS
  const templateParams = {
    name: formData.value.name,    // Coincide con {{name}}
    email: formData.value.email,  // Coincide con {{email}}
    phone: formData.value.phone,  // Debes agregarlo al template como {{phone}}
    message: formData.value.message, // Debes agregarlo al template como {{message}}
    title: 'Nuevo contacto desde Meltech SRL' // Coincide con {{title}}
  };

  try {
    // Método moderno de @emailjs/browser
    await emailjs.send(serviceID, templateID, templateParams, publicKey);
    
    submitStatus.value = 'success';
    
    // Limpiar formulario
    formData.value = { name: '', email: '', phone: '', message: '' };
    setTimeout(() => submitStatus.value = '', 5000);
    
  } catch (error) {
    console.error('Error detallado de EmailJS:', error);
    submitStatus.value = 'error';
    setTimeout(() => submitStatus.value = '', 4000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contacto" class="section-container">
    <div class="contact-wrapper">
      <!-- Columna Izquierda: Información de Contacto -->
      <div class="info-side">
        <h2 class="info-title">Información de <br>Contacto</h2>
        <p class="info-text">
          Estamos a su disposición para conversar sobre consultoría, sistemas IT y telecomunicaciones, y ofrecerle soluciones a medida.
        </p>
        
        <div class="contact-details">
          <form @submit.prevent="sendEmail" class="contact-form">
            <div class="form-group">
              <label for="name">Nombre completo *</label>
              <input type="text" id="name" v-model="formData.name" placeholder="Juan Pérez" required />
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" v-model="formData.email" placeholder="ejemplo@correo.com" required />
            </div>
            
            <div class="form-group">
              <label for="phone">Teléfono</label>
              <input type="tel" id="phone" v-model="formData.phone" placeholder="+54 9 11 ..." />
            </div>
            
            <div class="form-group">
              <label for="message">Mensaje *</label>
              <textarea id="message" v-model="formData.message" placeholder="Cuéntenos sobre su proyecto..." rows="4" required></textarea>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
              </svg>
              <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}</span>
            </button>
            
            <div v-if="submitStatus === 'success'" class="status-message success">
              ✓ ¡Mensaje enviado con éxito!
            </div>
            <div v-if="submitStatus === 'error'" class="status-message error">
              ✗ Error al enviar. Revisa la consola (F12).
            </div>
          </form>
        </div>
      </div>

      <div class="action-side">
        <div class="whatsapp-box">
          <h3>¿Tenés una consulta?</h3>
          <p>¡Envíanos un mensaje por WhatsApp!</p>
          <a href="https://wa.me/5491140440552" class="whatsapp-btn" target="_blank">
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 80px 40px;
  min-height: calc(100vh - 70px - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f6f2ea 0%, #eef2f5 100%);
}
.contact-wrapper {
  display: flex;
  max-width: 1000px;
  width: 100%;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(15, 61, 94, 0.12);
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(15,37,55,0.12), 0 0 0 1px rgba(255,255,255,0.4);
  overflow: hidden;
  transition: all 0.3s ease;
}
.contact-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 35px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.2);
}

.info-side {
  color: #0f2537;
  padding: 40px;
  width: 50%;
  border-right: 1px solid rgba(15, 61, 94, 0.12);
  position: relative;
}
.info-title { 
  font-size: 2.5rem; 
  line-height: 1.2; 
  margin-bottom: 20px; 
  background: #18a7b8;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.info-title:hover {
  background: #18a7b8;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
}
.info-text { font-size: 1.1rem; color: #334155; opacity: 1; margin-bottom: 30px; }
.contact-details { margin-bottom: 40px; }

/* === INICIO DE ESTILOS DEL FORMULARIO === */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  color: #0f2537;
  font-size: 0.95rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid rgba(15, 61, 94, 0.14);
  background: rgba(255, 255, 255, 0.98);
  color: #0f2537;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(15, 37, 55, 0.45);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #18a7b8;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0 3px rgba(24, 167, 184, 0.18);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(45deg, #18a7b8, #0f3d5e);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(24, 167, 184, 0.4);
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(24, 167, 184, 0.6);
  background: linear-gradient(45deg, #0f3d5e, #18a7b8);
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn svg {
  width: 20px;
  height: 20px;
}

.status-message {
  padding: 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  text-align: center;
  animation: slideIn 0.3s ease;
}

.status-message.success {
  background: rgba(76, 175, 80, 0.2);
  border: 1px solid rgba(76, 175, 80, 0.5);
  color: #a5d6a7;
}

.status-message.error {
  background: rgba(244, 67, 54, 0.2);
  border: 1px solid rgba(244, 67, 54, 0.5);
  color: #ef9a9a;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* === FIN DE ESTILOS DEL FORMULARIO === */

.contact-person {
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  transition: all 0.3s ease;
}

.contact-person:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(95, 225, 217, 0.3);
  transform: translateY(-2px);
}

.contact-person h4 { 
  margin: 0; 
  color: #18a7b8;
  font-weight: 600;
}

.contact-person span { 
  opacity: 0.9;
  color: #f2b15c;
}
.action-side {
  padding: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.action-side::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(24, 167, 184, 0.08) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-wrapper:hover .action-side::before {
  opacity: 1;
}
.whatsapp-box { text-align: center; }
.whatsapp-box h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #0f2537, #18a7b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.whatsapp-box:hover h3 {
  background: linear-gradient(45deg, #18a7b8, #0f2537, #f2b15c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateY(-2px);
}
.whatsapp-box p {
  font-size: 1.1rem;
  color: #334155;
  margin-bottom: 30px;
}
.whatsapp-btn {
  display: inline-flex; align-items: center; gap: 15px;
  padding: 18px 35px;
  background: linear-gradient(45deg, #0f3d5e, #18a7b8);
  color: #fff;
  border-radius: 50px;
  font-size: 1.2rem; font-weight: bold;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(24, 167, 184, 0.34), 0 0 0 1px rgba(255,255,255,0.2);
  position: relative;
  overflow: hidden;
}

.whatsapp-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.whatsapp-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(24, 167, 184, 0.48), 0 0 0 1px rgba(255,255,255,0.2);
  background: linear-gradient(45deg, #18a7b8, #5fe1d9);
}

.whatsapp-btn:hover::before {
  left: 100%;
}
.whatsapp-btn svg { width: 28px; height: 28px; }
/* Responsive Design */
@media (max-width: 1200px) {
  .section-container {
    padding: 60px 30px;
  }
  .contact-wrapper {
    max-width: 900px;
  }
}

.section-container {
  padding: 80px 40px;
  min-height: auto; /* Cambiar de calc(100vh - 70px - 160px) a auto */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f2ea;
}

@media (max-width: 900px) {
  .section-container {
    padding: 40px 20px;
    min-height: auto;
  }
  .contact-wrapper { 
    flex-direction: column; 
    border: none;
    max-width: 100%;
    width: 100%;
  }
  .info-side, .action-side { 
    width: 100%; 
    border: none; 
  }
  .info-side { 
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 25px 20px;
  }
  .action-side { 
    padding: 25px 20px;
  }
  .info-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 30px 15px;
  }
  .info-side, .action-side {
    padding: 20px 15px;
  }
  .info-title {
    font-size: 1.8rem;
  }
  .whatsapp-box h3 {
    font-size: 1.5rem;
  }
  .whatsapp-btn {
    font-size: 1rem;
    padding: 12px 25px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 25px 15px; /* Un poco más de padding */
    align-items: flex-start;
  }
  .contact-wrapper {
    margin-top: 15px;
  }
  .info-side, .action-side {
    padding: 25px 20px; /* Más padding interno */
  }
  .info-title {
    font-size: 1.6rem;
    line-height: 1.2;
    margin-bottom: 15px;
  }
  .info-text {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
  .contact-details {
    margin-bottom: 25px;
  }
  
  /* Estilos responsive para el formulario */
  .form-group label {
    font-size: 0.85rem;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
  
  .submit-btn {
    font-size: 0.95rem;
    padding: 12px 24px;
  }
  
  .contact-person h4 {
    font-size: 1rem;
  }
  .contact-person span {
    font-size: 0.85rem;
  }
  .whatsapp-box {
    text-align: center;
  }
  .whatsapp-box h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  .whatsapp-box p {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  .whatsapp-btn {
    font-size: 0.9rem;
    padding: 10px 18px;
    gap: 6px;
  }
  .whatsapp-btn svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 390px) {
  .info-title {
    font-size: 1.5rem;
  }
  .whatsapp-box h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 320px) {
  .section-container {
    padding: 15px 8px;
  }
  .info-title {
    font-size: 1.4rem;
  }
  .whatsapp-box h3 {
    font-size: 1.1rem;
  }
  .whatsapp-btn {
    font-size: 0.8rem;
    padding: 8px 15px;
  }
}
</style>