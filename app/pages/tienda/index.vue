<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProducts } from '~/composables/useProducts'

useHead({
  title: 'Tienda - Origiinales',
  meta: [
    { name: 'description', content: 'Descubre nuestra colección de productos únicos para bodas, bautizos, comuniones y más.' }
  ]
})

const { fetchProducts, fetchCategories } = useProducts()

const [{ data: products }, { data: categories }] = await Promise.all([
  useAsyncData('products', () => fetchProducts()),
  useAsyncData('categories', () => fetchCategories()),
])

// ─── Filtros reactivos ─────────────────────────────────────────────────────
const selectedCategorySlug = ref('todos')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  let list = products.value ?? []

  // Filtrar por categoría
  if (selectedCategorySlug.value !== 'todos') {
    list = list.filter(p => p.categorySlug === selectedCategorySlug.value)
  }

  // Filtrar por búsqueda
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(p => p.title.toLowerCase().includes(q))
  }

  return list
})
</script>

<template>
  <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-12">
        <h1 class="font-serif text-4xl sm:text-5xl text-brand-dark mb-4">
          Colección Origiinales
        </h1>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Detalles únicos hechos con amor para tus momentos más especiales.
        </p>
      </header>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-8">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar productos..."
            class="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-brand-gold focus:ring focus:ring-brand-gold/20 transition-all duration-200 text-brand-dark placeholder-gray-400"
          >
          <button
            v-if="searchQuery"
            class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-brand-dark transition-colors cursor-pointer"
            @click="searchQuery = ''"
          >
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-2 no-scrollbar">
        <!-- Botón "Todos" -->
        <button
          class="px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base border whitespace-nowrap cursor-pointer"
          :class="selectedCategorySlug === 'todos'
            ? 'bg-brand-gold text-white border-brand-gold shadow-md'
            : 'bg-transparent text-gray-500 border-gray-200 hover:border-brand-gold hover:text-brand-dark'"
          @click="selectedCategorySlug = 'todos'"
        >
          Todos
        </button>

        <!-- Categorías desde Contentful -->
        <button
          v-for="cat in (categories ?? [])"
          :key="cat.id"
          class="px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base border whitespace-nowrap cursor-pointer"
          :class="selectedCategorySlug === cat.slug
            ? 'bg-brand-gold text-white border-brand-gold shadow-md'
            : 'bg-transparent text-gray-500 border-gray-200 hover:border-brand-gold hover:text-brand-dark'"
          @click="selectedCategorySlug = cat.slug"
        >
          {{ cat.name }}
        </button>
      </div>

      <!-- Product Grid -->
      <TransitionGroup
        name="product-grid"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <NuxtLink
          v-for="product in filteredProducts"
          :key="product.id"
          :to="`/tienda/${product.slug}`"
          class="group block"
        >
          <article class="h-full flex flex-col">
            <!-- Image -->
            <div class="relative overflow-hidden rounded-lg aspect-4/5 bg-gray-50 mb-4">
              <img
                :src="product.mainImage"
                :alt="product.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-95"
                loading="lazy"
              >
            </div>

            <!-- Product Info -->
            <div class="mt-auto">
              <span class="text-xs text-brand-gold uppercase tracking-wider mb-1 block">
                {{ product.categoryName }}
              </span>
              <h2 class="font-serif text-lg text-brand-dark group-hover:text-brand-gold transition-colors duration-200 mb-1 line-clamp-2">
                {{ product.title }}
              </h2>
              <p class="font-sans text-gray-600">
                {{ product.price.toFixed(2) }}€
              </p>
            </div>
          </article>
        </NuxtLink>
      </TransitionGroup>

      <!-- Empty State -->
      <div
        v-if="filteredProducts.length === 0"
        class="text-center py-20 text-gray-500"
      >
        <p v-if="searchQuery">No se encontraron productos que coincidan con "{{ searchQuery }}".</p>
        <p v-else>No se encontraron productos en esta categoría.</p>
        <button
          class="mt-4 text-brand-gold hover:underline cursor-pointer"
          @click="() => { selectedCategorySlug = 'todos'; searchQuery = '' }"
        >
          Ver todos los productos
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transition Styles */
.product-grid-move,
.product-grid-enter-active,
.product-grid-leave-active {
  transition: all 0.5s ease;
}

.product-grid-enter-from,
.product-grid-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.product-grid-leave-active {
  position: absolute;
  width: 100%;
  max-width: calc(100% / 1 - 2rem);
}

@media (min-width: 640px) {
  .product-grid-leave-active {
    max-width: calc((100% - 2rem) / 2);
  }
}

@media (min-width: 1024px) {
  .product-grid-leave-active {
    max-width: calc((100% - 4rem) / 3);
  }
}

@media (min-width: 1280px) {
  .product-grid-leave-active {
    max-width: calc((100% - 6rem) / 4);
  }
}

/* Hide scrollbar */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
