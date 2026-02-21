<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProducts } from '~/composables/useProducts'

const route = useRoute()
const slug = route.params.slug as string
const url = useRequestURL()

const { fetchProductBySlug } = useProducts()

const { data: product } = await useAsyncData(`product-${slug}`, () => fetchProductBySlug(slug))

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Producto no encontrado' })
}

useHead({
  title: `${product.value.title} - Origiinales`,
  meta: [
    { name: 'description', content: product.value.title }
  ]
})

// ─── Galería ───────────────────────────────────────────────────────────────
const selectedImage = ref(product.value.mainImage)

// ─── Personalización ───────────────────────────────────────────────────────
const customName = ref('')

// ─── Cantidad ──────────────────────────────────────────────────────────────
const quantity = ref(product.value.minQuantity)

function decreaseQuantity() {
  if (quantity.value > product.value!.minQuantity) {
    quantity.value--
  }
}

function increaseQuantity() {
  if (product.value!.maxQuantity !== null && quantity.value >= product.value!.maxQuantity) {
    return
  }
  quantity.value++
}

// ─── WhatsApp volumen ──────────────────────────────────────────────────────
const showWhatsAppNotice = computed(() => {
  return (
    product.value!.maxQuantity !== null &&
    quantity.value === product.value!.maxQuantity
  )
})

const whatsappLink = computed(() => {
  const text = encodeURIComponent(
    `Hola, me interesa pedir gran volumen del producto ${product.value!.title}`
  )
  return `https://wa.me/34617899547?text=${text}`
})
</script>

<template>
  <div v-if="product" class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
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

        <!-- ── Columna izquierda: Galería ──────────────────────────────── -->
        <div>
          <!-- Imagen principal -->
          <div class="aspect-4/5 rounded-xl overflow-hidden bg-gray-50 mb-4">
            <img
              :src="selectedImage"
              :alt="product.title"
              class="w-full h-full object-cover transition-opacity duration-300"
            >
          </div>

          <!-- Thumbnails (si hay más de 1 imagen) -->
          <div v-if="product.allImages.length > 1" class="flex gap-2 flex-wrap">
            <button
              v-for="(img, idx) in product.allImages"
              :key="idx"
              class="w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 cursor-pointer"
              :class="selectedImage === img
                ? 'border-brand-gold opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100'"
              @click="selectedImage = img"
            >
              <img :src="img" :alt="`${product.title} imagen ${idx + 1}`" class="w-full h-full object-cover">
            </button>
          </div>
        </div>

        <!-- ── Columna derecha: Info & Compra ──────────────────────────── -->
        <div class="flex flex-col">
          <span class="text-brand-gold uppercase tracking-wider text-sm mb-2 font-medium">
            {{ product.categorySlug }}
          </span>
          <h1 class="font-serif text-3xl sm:text-4xl text-brand-dark mb-4 leading-tight">
            {{ product.title }}
          </h1>
          <p class="text-2xl text-gray-600 font-sans mb-6">
            {{ product.price.toFixed(2) }}€
          </p>

          <!-- Descripción (Rich Text → HTML) -->
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="prose prose-stone mb-8 text-gray-600 leading-relaxed" v-html="product.description" />

          <!-- ── Personalización ───────────────────────────────── -->
          <div
            v-if="product.isCustomizable"
            class="bg-brand-lilac/20 rounded-xl p-5 mb-6 border border-brand-lilac/50"
          >
            <h3 class="font-serif text-lg text-brand-dark mb-3">
              ✨ Personaliza tu producto
            </h3>
            <label for="customName" class="block text-sm font-medium text-gray-700 mb-1">
              Nombre para personalizar
            </label>
            <input
              id="customName"
              v-model="customName"
              type="text"
              placeholder="Ej: María y Juan"
              class="w-full rounded-md border border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30 py-2 px-3 text-brand-dark placeholder-gray-400 bg-white"
            >
          </div>

          <!-- ── Selector de cantidad ──────────────────────────── -->
          <div class="flex items-center gap-4 mb-4">
            <span class="text-sm font-medium text-gray-700">Cantidad:</span>
            <div class="flex items-center border border-gray-200 rounded-full overflow-hidden">
              <button
                class="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer font-medium"
                :disabled="quantity <= product.minQuantity"
                :class="{ 'opacity-40 cursor-not-allowed': quantity <= product.minQuantity }"
                @click="decreaseQuantity"
              >
                −
              </button>
              <span class="px-4 py-2 text-brand-dark font-semibold min-w-8 text-center">{{ quantity }}</span>
              <button
                class="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer font-medium"
                :disabled="product.maxQuantity !== null && quantity >= product.maxQuantity"
                :class="{ 'opacity-40 cursor-not-allowed': product.maxQuantity !== null && quantity >= product.maxQuantity }"
                @click="increaseQuantity"
              >
                +
              </button>
            </div>
          </div>

          <!-- ── Aviso WhatsApp por volumen ────────────────────── -->
          <Transition name="fade-slide">
            <div
              v-if="showWhatsAppNotice"
              class="bg-brand-mint/30 rounded-xl p-4 mb-6 border border-brand-mint"
            >
              <p class="text-brand-dark text-sm mb-3">
                ¿Necesitas más de <strong>{{ product.maxQuantity }}</strong> unidades?
                Contáctanos para un presupuesto personalizado.
              </p>
              <a
                :href="whatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 border border-brand-gold text-brand-dark text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-gold hover:text-white transition-all duration-200"
              >
                <!-- WhatsApp icon -->
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Solicitar presupuesto por volumen
              </a>
            </div>
          </Transition>

          <!-- ── Botón Snipcart ─────────────────────────────────── -->
          <button
            class="snipcart-add-item bg-brand-dark text-white rounded-full py-3 w-full font-medium hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer mt-auto"
            :disabled="product.isCustomizable && !customName"
            :class="{ 'opacity-50 cursor-not-allowed': product.isCustomizable && !customName }"
            :data-item-id="product.id"
            :data-item-price="product.price.toFixed(2)"
            :data-item-url="url.href"
            :data-item-name="product.title"
            :data-item-image="product.mainImage"
            :data-item-quantity="quantity"
            :data-item-min-quantity="product.minQuantity"
            :data-item-max-quantity="product.maxQuantity ?? undefined"
            :data-item-custom1-name="product.isCustomizable ? 'Personalización' : undefined"
            :data-item-custom1-type="product.isCustomizable ? 'text' : undefined"
            :data-item-custom1-value="product.isCustomizable ? customName : undefined"
          >
            <span v-if="product.isCustomizable && !customName">
              Introduce un nombre para añadir
            </span>
            <span v-else>
              Añadir al carrito — {{ product.price.toFixed(2) }}€
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

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
