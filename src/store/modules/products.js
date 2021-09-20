import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            all: []
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.all = products
        },
        DECREMENT_PRODUCT(state, {id}) {
            const product = state.all.find(product => product.id === id)
            product.quantity--
        }
    },
    actions: {
        async getAll({commit, dispatch}) {
            try {
                const {data} = await axios.get(`/products.json`)
                const products = Object.keys(data).map(id => ({...data[id], id}))

                commit('SET_PRODUCTS', products)
                dispatch('setMessage', {
                    value: 'Данные получены',
                    type: 'primary'
                }, {root: true})
            } catch (err) {
                dispatch('setMessage', {
                    value: err.message,
                    type: 'danger'
                }, {root: true})
            }
        },

        getOne({dispatch, state}, id) {
            try {
                const {name, price, description, status} = state.all.find(product => product.id === id)

                dispatch('setMessage', {
                    value: `Данные о продукте ${name} получены`,
                    type: 'primary'
                }, {root: true})

                return {name, price, description, status}

            } catch (err) {
                dispatch('setMessage', {
                    value: err.message,
                    type: 'danger'
                }, {root: true})
            }
        }
    },
    getters: {}
}
