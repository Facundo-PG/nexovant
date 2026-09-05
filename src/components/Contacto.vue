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
          <a href="https://wa.me/5491139164596" class="whatsapp-btn" target="_blank">
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Pegar aquí tus estilos CSS que ya tenías, están perfectos */
.section-container { padding: 80px 40px; background-color: #f6f2ea; display: flex; justify-content: center; }
.contact-wrapper { display: flex; max-width: 1000px; width: 100%; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.1); }
.info-side, .action-side { padding: 40px; width: 50%; }
.info-title { font-size: 2.5rem; color: #18a7b8; margin-bottom: 20px; }
.contact-form { display: flex; flex-direction: column; gap: 15px; }
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-group input, .form-group textarea { padding: 10px; border: 1px solid #ddd; border-radius: 8px; }
.submit-btn { padding: 15px; background: #18a7b8; color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: bold; }
.status-message { margin-top: 10px; padding: 10px; border-radius: 8px; text-align: center; }
.success { background: #d4edda; color: #155724; }
.error { background: #f8d7da; color: #721c24; }
@media (max-width: 768px) { .contact-wrapper { flex-direction: column; } .info-side, .action-side { width: 100%; } }
</style>