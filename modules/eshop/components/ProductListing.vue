<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="product in products" :key="product.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <RouterLink :to="`/product/${product.id}`" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="product.thumbnail.url" />
          </RouterLink>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ product.categories.at(-1).name }}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{{ product.name }}</h2>
            <p class="mt-1">${{ product.price_range.minimum_price.final_price.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  products: {
    type: Array as PropType<any[]>,
    required: true,
  },
})
</script>
