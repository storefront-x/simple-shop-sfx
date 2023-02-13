<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
        {{ category.name }}
      </h1>

      <ProductListing :products="category.products.items" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductListing from '#ioc/components/ProductListing'
import useResource from '#ioc/composables/useResource'
import useRoute from '#ioc/composables/useRoute'
import CategoryDetail from '#ioc/graphql/queries/CategoryDetail'
import fetchQuery from '#ioc/utils/fetchQuery'
import { computed } from 'vue'

const route = useRoute()

const [data] = await useResource(
  () => route.params.id,
  (id) => fetchQuery(CategoryDetail().with({ id })),
)

const category = computed(() => data.value.categoryList[0])
</script>
