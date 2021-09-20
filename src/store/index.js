import {createStore, createLogger} from 'vuex'
import cart from './modules/cart.module'
import products from './modules/products'

const dev = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        products,
        cart
    },
    strict: dev,
    plugins: dev ? [createLogger()] : [],
    state() {
        return {
            message: null
        }
    },
    mutations: {
        SET_MESSAGE(state, message) {
            state.message = message
        },
        CLEAR_MESSAGE(state) {
            state.message = null
        }
    },
    actions: {
        setMessage({commit}, message) {
            commit('SET_MESSAGE', message)

            setTimeout(() => commit('CLEAR_MESSAGE'), 2000)
        }
    }
})
