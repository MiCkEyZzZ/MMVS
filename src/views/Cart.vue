<template>
  <app-page back title="Корзина">
    <template #arrow>
      <svg class="svg" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.792893 6.79289C0.402369 7.18342 0.402369 7.81658 0.792892 8.20711L7.15685 14.5711C7.54738 14.9616 8.18054 14.9616 8.57107 14.5711C8.96159 14.1805 8.96159 13.5474 8.57107 13.1569L2.91421 7.5L8.57107 1.84314C8.96159 1.45262 8.96159 0.819456 8.57107 0.428931C8.18054 0.0384068 7.54738 0.0384068 7.15686 0.428931L0.792893 6.79289ZM19.5 6.5L1.5 6.5L1.5 8.5L19.5 8.5L19.5 6.5Z"/>
      </svg>
    </template>
    <p v-if="!products.length">Корзина пуста. Воспользуйтесь поиском, чтобы найти всё что нужно.</p>
    <ul class="table" v-else>
      <li v-for="product in products" :key="product.id" class="table-item pl-1">
        <div class="table-control">
          <h3 class="mr-1">{{ product.name }}</h3>
          <p class="table-control__price">{{ currency(product.price) }}</p>
        </div>
        <div class="card-wrapper">
          <div class="table-control">
            <button
                type="button"
                class="btn-counter danger"
                @click="decrementItem(product)"
                :disabled="product.quantity === 1"
            >-
              <span class="visually-hidden">Меньше</span>
            </button>
            <input type="text" name="counter" class="input" disabled :value="product.quantity">
            <button
                type="button"
                class="btn-counter primary"
                @click="incrementItem(product)"
                :disabled="product.quantity === 99"
            >+
              <span class="visually-hidden">Больше</span>
            </button>
          </div>
          <div class="table-control">
            <button
                type="button"
                class="btn danger"
                @click="deleteItem(product)"
            >Удалить</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="form-control" v-if="products.length">
      <p class="mt-1 product-text">Итого: <span class="text-danger ml-2">{{ currency(total) }}</span></p>
      <button
          type="button"
          class="btn primary"
          @click="submitForm"
      >Оформить</button>
    </div>
  </app-page>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

import {currency} from '@/common/helpers'

export default {
  setup() {
    const store = useStore()

    const products = computed(() => store.getters['cart/cartProducts'])
    const total = computed(() => store.getters['cart/cartTotalPrice'])

    const deleteItem = (product) => store.dispatch('cart/removeItem', product)
    const decrementItem = (product) => store.dispatch('cart/decrementItem', product)
    const incrementItem = (product) => store.dispatch('cart/incrementItem', product)
    const submitForm = () => store.dispatch('cart/submit')

    return {currency, products, total, decrementItem, deleteItem, incrementItem, submitForm}
  }
}
</script>

<style lang="css" scoped>

</style>
