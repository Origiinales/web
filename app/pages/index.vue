<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="relative bg-linear-to-r from-brand-pink/30 to-brand-lilac/30 py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <!-- Logo with multiply blend mode -->
        <div class="mb-8 p-4">
           <img 
            src="/logo_recortado.webp" 
            alt="Origiinales Logo" 
            class="h-24 md:h-32 w-auto mix-blend-multiply"
            style="mask-image: radial-gradient(circle, black 70%, transparent 75%); -webkit-mask-image: radial-gradient(circle, black 70%, transparent 75%);"
          >
        </div>
        
        <h1 class="text-3xl md:text-5xl font-serif text-brand-dark tracking-tight italic">
          Detalles que cuentan historias
        </h1>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Image Column -->
          <div class="relative order-1 md:order-1">
            <div class="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden shadow-xl bg-brand-mint">
              <img 
                src="https://placehold.co/600x800" 
                alt="Creadora de Origiinales" 
                class="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              >
            </div>
          </div>

          <!-- Text Column -->
          <div class="order-2 md:order-2 space-y-8">
            <h2 class="text-4xl md:text-5xl font-serif text-brand-dark">
              Hola, soy Laura Pesquer
            </h2>
            
            <div class="prose prose-lg text-gray-600 font-sans">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div class="pt-4">
              <NuxtLink 
                to="/shop" 
                class="inline-block bg-brand-gold text-white px-8 py-3 rounded-full font-sans font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                Ver Catálogo
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
