<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="Продукт" v-else-if="product">
    <hr>
    <template #arrow>
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.792893 6.79289C0.402369 7.18342 0.402369 7.81658 0.792892 8.20711L7.15685 14.5711C7.54738 14.9616 8.18054 14.9616 8.57107 14.5711C8.96159 14.1805 8.96159 13.5474 8.57107 13.1569L2.91421 7.5L8.57107 1.84314C8.96159 1.45262 8.96159 0.819456 8.57107 0.428931C8.18054 0.0384068 7.54738 0.0384068 7.15686 0.428931L0.792893 6.79289ZM19.5 6.5L1.5 6.5L1.5 8.5L19.5 8.5L19.5 6.5Z" fill="#cccccc"/>
      </svg>
    </template>
    <p class="product-title">{{ product.name }}</p>
    <app-status :type="product.status"></app-status>
    <p>Цена: <strong class="table-control__price">{{ currency(product.price) }}</strong></p>

    <p class="product-text">{{ product.description }}</p>
  </app-page>
  <h3 v-else class="text-center text-white">Товар с ID = {{ $route.params.id }} не найден.</h3>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

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

    return {loading, product, currency}
  }
}
</script>

<style lang="css" scoped>

</style>
