<script setup lang="ts">
import { useServices } from '~/composables/useServices'

useHead({
  title: 'Servicios - Origiinales',
  meta: [
    { name: 'description', content: 'Descubre nuestros servicios para hacer de tu evento un momento único e irrepetible. Presupuesto personalizado sin compromiso.' },
  ],
})

const { fetchServices } = useServices()

const { data: services } = await useAsyncData('services', () => fetchServices())
</script>

<template>
  <div class="bg-white">
    <!-- ─── Hero Section ──────────────────────────────────────────────────── -->
    <section class="py-20 px-4 sm:px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="font-serif text-4xl lg:text-5xl text-brand-dark mb-6">
          Nuestros Servicios
        </h1>
        <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Cada evento es único y merece una propuesta a medida. Trabajamos contigo
          desde el primer detalle hasta el último, creando momentos que perduran
          en el recuerdo.
        </p>
      </div>
    </section>

    <!-- ─── Services List ─────────────────────────────────────────────────── -->
    <section class="py-12 pb-28 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto space-y-24">
        <article
          v-for="(servicio, index) in (services ?? [])"
          :key="servicio.id"
          class="flex flex-col lg:flex lg:items-center lg:gap-16"
          :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Image -->
          <div class="w-full lg:w-1/2">
            <img
              :src="servicio.mainImage"
              :alt="servicio.title"
              class="w-full aspect-4/3 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            >
          </div>

          <!-- Text Content -->
          <div class="w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0">
            <h2 class="font-serif text-3xl text-brand-dark mb-4">
              {{ servicio.title }}
            </h2>
            <p class="font-sans text-gray-700 text-lg mb-8 leading-relaxed whitespace-pre-line">
              {{ servicio.shortDescription }}
            </p>
            <a
              :href="servicio.whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-gold transition-colors w-fit"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
