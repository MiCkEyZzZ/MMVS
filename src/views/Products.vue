<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Список продуктов" v-else>

    <product-filter v-model="filter"></product-filter>
    <product-list :products="products"></product-list>

    <teleport to="body">
      <app-modal v-if="modal" title="Добавить товар в корзину?" @close="modal = false">
        <product-modal />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import {computed, onMounted, ref} from 'vue'
import {useStore} from 'vuex'

import ProductModal from '@/components/products/ProductModal'
import ProductFilter from '@/components/products/ProductFilter'
import ProductList from '@/components/products/ProductList'

export default {
  setup() {
    const store = useStore()
    let modal = ref(false)
    const loading = ref(false)
    const filter = ref({})

    onMounted(async () => {
      loading.value = true
      await store.dispatch('products/getAll')
      loading.value = false
    })

    const products = computed(() => store.state.products.all
        .filter(p => {
          if (filter.value.name) {
            return p.name.toString().toLowerCase().includes(filter.value.name)
          }

          return p
        })
        .filter(p => {
          if (filter.value.status) {
            return filter.value.status === p.status
          }

          return p
        })
    )

    return {loading, products, filter, modal}
  },
  components: {ProductList, ProductFilter, ProductModal}
}
</script>

<style lang="css" scoped>

</style>
