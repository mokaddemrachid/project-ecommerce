export const addItem = (product, count) => {
    return {
        type : "ADDITEM",
        payload : {product, count}
    }
}

export const delItem = (id) => {
    return {
        type : "DELITEM",
        payload : id
    }
}