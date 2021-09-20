<template>
  <header class="navbar">
    <h3>MMVS</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/"
        >Главная</router-link>
      </li>
      <li>
        <router-link to="/products"
        >Продукты</router-link>
      </li>
      <li>
        <router-link to="/about"
        >О нас</router-link>
      </li>
      <li>
        <span v-if="count === 0" class="cart-icon--empty">{{ count }}</span>
        <span v-else class="cart-icon">{{ count }}</span>
        <router-link to="/cart"
        >Корзина</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup() {
    const store = useStore()

    const count = computed(() => store.getters['cart/cartCountPosition'])

    return {count}
  }
}
</script>

<style lang="scss" scoped>

</style>
