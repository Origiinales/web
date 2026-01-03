<template>
  <div class="min-h-screen bg-brand-mint/20 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
          Hablemos de tu evento
        </h1>
        <p class="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
          Cuéntame qué estás celebrando y hagamos algo único.
        </p>
      </div>

      <!-- Grid Principal -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        <!-- Columna Izquierda: Contacto Directo -->
        <div class="space-y-8 flex flex-col justify-center">
          <div class="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-brand-lilac/50">
            <h2 class="text-2xl font-serif text-brand-dark mb-6">Contacto Directo</h2>
            
            <a 
              href="https://wa.me/34600000000?text=Hola,%20me%20gustaría%20más%20información%20sobre..." 
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center gap-3 w-full bg-brand-gold hover:bg-brand-gold/80 text-white py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mb-8 transform hover:-translate-y-0.5"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span class="font-semibold text-lg">Escribir por WhatsApp</span>
            </a>

            <div class="space-y-4">
              <div class="flex items-center gap-4 text-gray-600 hover:text-brand-dark transition-colors">
                <div class="p-2 bg-brand-lilac rounded-full text-brand-dark">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:hola@origiinales.com" class="font-sans hover:underline">hola@origiinales.com</a>
              </div>
              
              <div class="flex items-center gap-4 text-gray-600 hover:text-brand-dark transition-colors">
                <div class="p-2 bg-brand-lilac rounded-full text-brand-dark">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <a href="https://instagram.com/origiinales" target="_blank" class="font-sans hover:underline">@origiinales</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Formulario -->
        <div class="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-brand-lilac/50">
          <form 
            name="contacto" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            class="space-y-6"
          >
            <!-- Netlify Hidden Inputs -->
            <input type="hidden" name="form-name" value="contacto" >
            <div class="hidden">
              <input name="bot-field" >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="name" class="block text-sm font-medium text-gray-700 font-sans">Nombre</label>
                <input 
                  id="name" 
                  type="text" 
                  name="name" 
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                  placeholder="Tu nombre"
                >
              </div>

              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-gray-700 font-sans">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  name="email" 
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                  placeholder="tu@email.com"
                >
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="event-type" class="block text-sm font-medium text-gray-700 font-sans">Tipo de Evento</label>
                <div class="relative">
                  <select 
                    id="event-type" 
                    name="event-type"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all appearance-none bg-gray-50 focus:bg-white"
                  >
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="Boda">Boda</option>
                    <option value="Bautizo">Bautizo</option>
                    <option value="Comunión">Comunión</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <label for="date" class="block text-sm font-medium text-gray-700 font-sans">Fecha del evento</label>
                <input 
                  id="date" 
                  type="date" 
                  name="date"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-600"
                >
              </div>
            </div>

            <div class="space-y-2">
              <label for="message" class="block text-sm font-medium text-gray-700 font-sans">Cuéntame más</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white resize-none"
                placeholder="Detalles, ideas, número aproximado de invitados..."
              />
            </div>

            <button 
              type="submit"
              class="w-full bg-brand-dark hover:bg-opacity-90 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Presupuesto</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
