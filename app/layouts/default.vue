<template>
  <div class="flex flex-col min-h-screen bg-brand-mint font-sans">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="shrink-0 flex items-center">
              <NuxtLink to="/" class="text-2xl font-bold font-serif text-brand-dark hover:text-brand-gold transition-colors">
                Origiinales
              </NuxtLink>
            </div>
          </div>
          <!-- Desktop Menu -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink 
              v-for="link in links" 
              :key="link.to" 
              :to="link.to" 
              class="border-transparent text-gray-500 hover:border-brand-gold hover:text-brand-gold inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              active-class="!border-brand-gold text-brand-dark"
            >
              {{ link.text }}
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Snipcart Button -->
            <button class="snipcart-checkout flex items-center space-x-2 text-brand-dark hover:text-brand-gold transition-colors font-medium relative group cursor-pointer">
              <span class="sr-only">Ver carrito</span>
              <div class="relative">
                <!-- Icono de bolsa de compra -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span class="snipcart-items-count absolute -top-2 -right-2 bg-brand-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform scale-0 snipcart-items-count:scale-100 transition-transform empty:hidden">
                  0
                </span>
              </div>
              <span class="snipcart-total-price hidden sm:block text-sm font-sans" />
            </button>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-brand-pink focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-gold" aria-controls="mobile-menu" :aria-expanded="isOpen" @click="isOpen = !isOpen">
              <span class="sr-only">Open main menu</span>
              <svg :class="{'hidden': isOpen, 'block': !isOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg :class="{'hidden': !isOpen, 'block': isOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile menu -->
      <div v-show="isOpen" id="mobile-menu" class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to"
            :to="link.to"
            class="border-transparent text-gray-600 hover:bg-brand-pink hover:border-brand-gold hover:text-brand-dark block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200"
            active-class="!border-brand-gold bg-brand-pink text-brand-dark"
            @click="isOpen = false"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="grow">
      <slot />
    </main>

    <footer class="bg-brand-dark text-white border-t border-gray-700/30">
      <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-serif font-semibold mb-4 text-brand-gold">Origiinales</h3>
            <p class="text-gray-300 text-sm">Detalles que cuentan historias, hechos con amor.</p>
          </div>
          <div>
            <h3 class="text-lg font-serif font-semibold mb-4 text-brand-gold">Enlaces</h3>
             <ul class="space-y-2">
               <li v-for="link in links" :key="link.to">
                 <NuxtLink :to="link.to" class="text-gray-300 hover:text-brand-gold transition-colors text-sm">{{ link.text }}</NuxtLink>
               </li>
             </ul>
          </div>
          <div>
            <h3 class="text-lg font-serif font-semibold mb-4 text-brand-gold">Contacto</h3>
            <p class="text-gray-400 text-sm">origiinalcreaciones@gmail.com</p>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700/30 pt-8 text-center">
          <p class="text-sm text-gray-400">&copy; {{ new Date().getFullYear() }} Origiinales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { text: 'Inicio', to: '/' },
  { text: 'Tienda', to: '/tienda' },
  { text: 'Servicios', to: '/servicios' },
  { text: 'Contacto', to: '/contacto' }
]
</script>
