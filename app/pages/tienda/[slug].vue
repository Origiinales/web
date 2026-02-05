<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const slug = route.params.slug as string
const url = useRequestURL()

// State for customization
const customName = ref('')
const customDate = ref('')

// Mock Data (Same as index but extended with details)
const products = [
  {
    id: 1,
    title: 'Invitación Floral Elegante',
    price: 3.50,
    category: 'Boda',
    image: 'https://placehold.co/500x600',
    slug: 'invitacion-floral-elegante',
    description: 'Una invitación delicada con motivos florales en acuarela. Impresa en papel de alta calidad con textura. Perfecta para bodas románticas y elegantes.',
    isCustomizable: true
  },
  {
    id: 2,
    title: 'Recuerdo de Bautizo Personalizado',
    price: 4.95,
    category: 'Bautizo',
    image: 'https://placehold.co/500x600',
    slug: 'recuerdo-bautizo-personalizado',
    description: 'Un detalle único para los invitados del bautizo. Incluye tarjeta personalizada y un pequeño obsequio. Disponible en varios colores.',
    isCustomizable: true
  },
  {
    id: 3,
    title: 'Pack Comunión Completo',
    price: 150.00,
    category: 'Packs',
    image: 'https://placehold.co/500x600',
    slug: 'pack-comunion-completo',
    description: 'Todo lo que necesitas para la papelería de la comunión: invitaciones, recordatorios, menús y etiquetas para detalles. Ahorra comprando el pack completo.',
    isCustomizable: true
  },
  {
    id: 4,
    title: 'Guirnalda Cumpleaños Feliz',
    price: 12.00,
    category: 'Cumpleaños',
    image: 'https://placehold.co/500x600',
    slug: 'guirnalda-cumpleanos-feliz',
    description: 'Guirnalda festiva para decorar cualquier fiesta de cumpleaños. Colores vibrantes y alegres.',
    isCustomizable: false
  },
  {
    id: 5,
    title: 'Libro de Firmas Rústico',
    price: 45.00,
    category: 'Boda',
    image: 'https://placehold.co/500x600',
    slug: 'libro-firmas-rustico',
    description: 'Guarda los mejores deseos de tus invitados en este precioso libro de firmas de estilo rústico.',
    isCustomizable: true
  },
  {
    id: 6,
    title: 'Detalle para Invitados Vela',
    price: 2.80,
    category: 'Comunión',
    image: 'https://placehold.co/500x600',
    slug: 'detalle-invitados-vela',
    description: 'Pequeñas velas aromáticas personalizadas, un regalo práctico y bonito.',
    isCustomizable: false
  },
  {
    id: 7,
    title: 'Lámina de Huellas',
    price: 18.50,
    category: 'Bautizo',
    image: 'https://placehold.co/500x600',
    slug: 'lamina-huellas',
    description: 'Un recuerdo original donde los invitados dejan su huella formando parte de la ilustración.',
    isCustomizable: true
  },
  {
    id: 8,
    title: 'Pack Fiesta Infantil',
    price: 85.00,
    category: 'Packs',
    image: 'https://placehold.co/500x600',
    slug: 'pack-fiesta-infantil',
    description: 'Kit completo para decorar fiestas infantiles. Temáticas variadas a elegir.',
    isCustomizable: false
  }
]

const product = products.find(p => p.slug === slug)

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Producto no encontrado' })
}

useHead({
  title: `${product.title} - Origiinales`,
  meta: [
    { name: 'description', content: product.description }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Breadcrumbs -->
      <nav class="mb-8 text-sm text-gray-500 font-sans">
        <NuxtLink to="/" class="hover:text-brand-dark transition-colors">Inicio</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/tienda" class="hover:text-brand-dark transition-colors">Tienda</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-brand-gold font-medium">{{ product.title }}</span>
      </nav>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <!-- Left Column: Image -->
        <div class="relative">
          <div class="aspect-4/5 rounded-lg overflow-hidden bg-gray-50 sticky top-24">
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-cover"
            >
          </div>
        </div>

        <!-- Right Column: Info & Purchase -->
        <div class="flex flex-col">
          <span class="text-brand-gold uppercase tracking-wider text-sm mb-2 font-medium">
            {{ product.category }}
          </span>
          <h1 class="font-serif text-3xl sm:text-4xl text-brand-dark mb-4 leading-tight">
            {{ product.title }}
          </h1>
          <p class="text-2xl text-gray-600 font-sans mb-6">
            {{ product.price.toFixed(2) }}€
          </p>
          
          <div class="prose prose-stone mb-8 text-gray-600 leading-relaxed">
            <p>{{ product.description }}</p>
          </div>

          <!-- Customization Section -->
          <div 
            v-if="product.isCustomizable" 
            class="bg-brand-lilac/20 rounded-xl p-6 mb-8 border border-brand-lilac/50"
          >
            <h3 class="font-serif text-lg text-brand-dark mb-4 flex items-center gap-2">
              <span class="i-heroicons-sparkles text-brand-gold"/>
              Personaliza tu producto
            </h3>
            
            <div class="space-y-4">
              <div>
                <label for="customName" class="block text-sm font-medium text-gray-700 mb-1">
                  Nombre para personalizar
                </label>
                <input
                  id="customName"
                  v-model="customName"
                  type="text"
                  placeholder="Ej: María y Juan"
                  class="w-full rounded-md border-brand-lilac focus:border-brand-gold focus:ring focus:ring-brand-gold/20 py-2 px-3 text-brand-dark placeholder-gray-400 bg-white p-2"
                >
              </div>

              <div>
                <label for="customDate" class="block text-sm font-medium text-gray-700 mb-1">
                  Fecha del evento <span class="text-gray-400 font-normal">(Opcional)</span>
                </label>
                <input
                  id="customDate"
                  v-model="customDate"
                  type="date"
                  class="w-full rounded-md border-brand-lilac focus:border-brand-gold focus:ring focus:ring-brand-gold/20 py-2 px-3 text-brand-dark bg-white p-2"
                >
              </div>
            </div>
          </div>

          <!-- Add to Cart Button -->
          <button
            class="snipcart-add-item w-full bg-brand-dark text-white font-medium py-4 px-8 rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform active:scale-[0.99] transition-all duration-200 mt-auto cursor-pointer"
            :data-item-id="product.id.toString()"
            :data-item-price="product.price.toFixed(2)"
            :data-item-url="url.href"
            :data-item-description="product.description"
            :data-item-image="product.image"
            :data-item-name="product.title"
            v-bind="{
              ...(product.isCustomizable && customName ? {
                'data-item-custom1-name': 'Personalización',
                'data-item-custom1-value': customName,
                'data-item-custom1-required': 'true'
              } : {}),
              ...(product.isCustomizable && customDate ? {
                'data-item-custom2-name': 'Fecha del evento',
                'data-item-custom2-value': customDate
              } : {})
            }"
            :disabled="product.isCustomizable && !customName"
          >
            <span v-if="product.isCustomizable && !customName">
              Introduce un nombre para añadir
            </span>
            <span v-else>
              Añadir al carrito - {{ product.price.toFixed(2) }}€
            </span>
          </button>
          
          <p class="text-xs text-center text-gray-400 mt-4">
            Envío gratuito en pedidos superiores a 50€
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
