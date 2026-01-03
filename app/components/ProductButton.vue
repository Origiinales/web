<template>
  <button
    class="snipcart-add-item bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
    :data-item-id="id"
    :data-item-price="price"
    :data-item-url="url"
    :data-item-name="name"
    :data-item-image="image"
    :data-item-custom1-name="isPersonalizable ? 'Nombre' : undefined"
    :data-item-custom1-type="isPersonalizable ? 'text' : undefined"
  >
    <slot>Añadir al carrito</slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  id: string,
  price: number,
  name: string,
  url: string,
  image?: string,
  isPersonalizable?: boolean
}>()
</script>
