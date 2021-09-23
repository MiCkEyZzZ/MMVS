<template>
  <app-page back title="Корзина">
    <template #arrow><app-icon /></template>
    <p v-if="!products.length">Корзина пуста. Воспользуйтесь поиском, чтобы найти нужный товар.</p>
    <ul class="table" v-else>
      <li class="table-item pl-1" v-for="product in products" :key="product.id">
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
      <p class="mt-1 product-text">
        Итого: <span class="text-danger ml-2">{{ currency(total) }}</span>
      </p>
      <button
          type="button"
          class="btn primary"
          @click="submitForm"
      >Оформить</button>
    </div>
  </app-page>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import { currency } from '@/common/helpers'

export default {
  setup() {
    const store = useStore()

    const products = computed(() => store.getters['cart/cartProducts'])
    const total = computed(() => store.getters['cart/cartTotalPrice'])

    const deleteItem = (product) => store.dispatch('cart/removeItem', product)
    const decrementItem = (product) => store.dispatch('cart/decrementItem', product)
    const incrementItem = (product) => store.dispatch('cart/incrementItem', product)
    const submitForm = () => store.dispatch('cart/submit')

    return { currency, products, total, decrementItem, deleteItem, incrementItem, submitForm }
  }
}
</script>

<style lang="css" scoped>

</style>
