export default {
    namespaced: true,
    state() {
        return {
            items: [],
        }
    },

    mutations: {
        ADD_TO_PRODUCT (state, { id, name, price }) {
            state.totalPosition++
            state.items.push({ id, quantity: 1, name, price })
        },
        REMOVE_PRODUCT (state, {id}) {
            state.items = state.items.filter(item => item.id !== id)
        },
        SUBMIT_FORM (state) {
            state.items = []
            state.totalPosition = 0
        },
        INCREMENT_PRODUCT(state, {id}) {
            let cartItem = state.items.find(item => item.id === id)

            cartItem.quantity++
        },
        DECREMENT_PRODUCT(state, {id}) {
            let cartItem = state.items.find(item => item.id === id)

            if (cartItem.quantity === 1) {
                return
            }

            cartItem.quantity--
        }
    },

    actions: {
        addProductToCart({state, commit, dispatch}, product) {
            if (product.quantity > 0) {
                const cartItem = state.items.find(item => item.id === product.id)

                if (!cartItem) {
                    commit('ADD_TO_PRODUCT', { id: product.id, name: product.name, price: product.price })
                } else {
                    commit('INCREMENT_PRODUCT', cartItem)
                }

                commit('products/DECREMENT_PRODUCT', {id: product.id}, {root: true})

                dispatch('setMessage', {
                    value: `Товар добавлен в корзину ${product.name}`,
                    type: 'primary'
                }, {root: true})
            }
        },

        incrementItem({commit}, product) {
            setTimeout(() => {
                commit('INCREMENT_PRODUCT', product)
            }, 100)
            commit('products/DECREMENT_PRODUCT', {id: product.id}, {root: true})
        },

        decrementItem({commit}, product) {
            setTimeout(() => {
                commit('DECREMENT_PRODUCT', product)
            }, 100)
        },

        removeItem ({dispatch, commit}, product) {
            try {
                commit('REMOVE_PRODUCT', product)

                dispatch('setMessage', {
                    value: `Товар удалён из корзины ${product.name}`,
                    type: 'primary'
                }, {root: true})

            } catch (err) {
                dispatch('setMessage', {
                    value: err.message,
                    type: 'danger'
                }, {root: true})
            }
        },

        submit ({dispatch, commit}) {
            try {
                commit('SUBMIT_FORM')

                dispatch('setMessage', {
                    value: 'Спасибо за покупку',
                    type: 'primary'
                }, {root: true})
            } catch (err) {
                dispatch('setMessage', {
                    value: err.message,
                    type: 'danger'
                }, {root: true})
            }
        }
    },

    getters: {
        cartProducts (state, getters, rootState) {
            return state.items.map(({ id, quantity }) => {
                const product = rootState.products.all.find(product => product.id === id)

                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity
                }
            })
        },

        cartTotalPrice (state, getters) {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        },

        cartCountPosition (state, getters) {
          return getters.cartProducts.reduce((count, product) => count + product.quantity, 0)
        }
    }

}
