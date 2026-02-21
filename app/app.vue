<template>
  <NuxtLayout>
    <NuxtPage />
    <div
      id="snipcart"
      :hidden="true"
      :data-api-key="snipcartKey"
      data-config-modal-style="side"
      data-currency="eur"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const snipcartKey = config.public.snipcartKey
</script>
