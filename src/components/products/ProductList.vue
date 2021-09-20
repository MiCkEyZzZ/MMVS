<template>
  <h4 v-if="products.length === 0" class="text-center">Список товаров пуст</h4>
  <ul class="table" v-else>
    <li v-for="product in products" :key="product.id" class="table-item">
      <div class="table-control">
        <div class="table-picture mr-1">
          <img class="table-picture--img"
               :src="product.img"
               :alt="product.name"
          >
        </div>
        <router-link
            class="table-item-link"
            :to="{name: 'Product', params: {id: product.id}}"
        >{{ product.name }}</router-link>
      </div>
      <div class="table-control">
        <app-status :type="product.status"></app-status>
      </div>
      <div class="table-control">
        <p class="table-control__price">{{ currency(product.price) }}</p>
        <button
            class="btn primary"
            :disabled="!product.quantity"
            @click="addProductToCart(product)"
            v-text="'Купить'"
        ></button>
      </div>
    </li>
  </ul>
</template>

<script>
import {currency} from '@/common/helpers'
import {useStore} from 'vuex'

export default {
  props: ['products'],
  setup() {
    const store = useStore()

    const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)

    return { currency, addProductToCart }
  }
}
</script>

<style lang="css" scoped>

</style>
