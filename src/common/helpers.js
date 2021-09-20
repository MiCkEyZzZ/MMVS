const formatter = new Intl.NumberFormat('ru-RU', {currency: 'RUB', style: 'currency'})

export function currency (value) {
    return formatter.format(value)
}

const calculateObject = (cb) => obj => Object.values(obj).reduce(cb)

export const calculateTotal = calculateObject((acc, qt) => acc + qt)
