<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
      <!-- Image gallery -->
      <div class="flex flex-col-reverse">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-center object-cover sm:rounded-lg" >
        </div>
      </div>

      <!-- Product info -->
      <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ product.name }}</h1>

        <div class="mt-3">
          <h2 class="sr-only">Información del producto</h2>
          <p class="text-3xl text-gray-900">€{{ product.price }}</p>
        </div>

        <div class="mt-6">
          <h3 class="sr-only">Descripción</h3>
          <div class="text-base text-gray-700 space-y-6" v-html="product.description" />
        </div>

        <div class="mt-10 flex sm:flex-col1">
          <ProductButton
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :url="product.url"
            :image="product.image"
            :is-personalizable="product.isPersonalizable"
            class="w-full justify-center text-lg! py-3! bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 rounded-md shadow-lg transform transition hover:-translate-y-1"
          >
            Añadir al carrito
          </ProductButton>
        </div>
        
        <div v-if="product.isPersonalizable" class="mt-4 p-4 bg-indigo-50 rounded-md border border-indigo-100">
          <p class="text-sm text-indigo-700 flex items-center">
            <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Este producto se puede personalizar con un nombre.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: string
    name: string
    price: number
    description: string
    image: string
    url: string
    isPersonalizable?: boolean
  }
}>()
</script>
