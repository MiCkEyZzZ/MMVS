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
        <span class="cart-icon--empty" v-if="!count">{{ count }}</span>
        <span v-else class="cart-icon">{{ count }}</span>
        <router-link to="/cart"
        >Корзина</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const count = computed(() => store.getters['cart/cartCountPosition'])

    return { count }
  }
}
</script>

<style lang="scss" scoped>

</style>
