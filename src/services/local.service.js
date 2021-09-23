const PRODUCTS = 'products'

export const saveProduct = (product) => {
  window.localStorage.setItem(PRODUCTS, product)
}

export const deleteProduct = () => {
  window.localStorage.removeItem(PRODUCTS)
}
