<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="Продукт" v-else-if="product">
    <hr>
    <template #arrow><app-icon /></template>
    <p class="product-title">{{ product.name }}</p>
    <app-status :type="product.status"></app-status>
    <p>Цена: <strong class="table-control__price">{{ currency(product.price) }}</strong></p>

    <p class="product-text">{{ product.description }}</p>
  </app-page>
  <h3 v-else class="text-center text-white">Товар с ID = {{ $route.params.id }} не найден.</h3>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import {currency} from '@/common/helpers'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const loading = ref(false)
    const product = ref({})

    onMounted(async () => {
      loading.value = true
      product.value = await store.dispatch('products/getOne', route.params.id)
      loading.value = false
    })

    return { loading, product, currency }
  }
}
</script>

<style lang="css" scoped>

</style>
