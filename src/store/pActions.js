export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const editProduct = (product_id, updatedProduct) => {
    return {
        type: 'EDIT_PRODUCT',
        product_id: product_id,
        updatedProduct: updatedProduct 
    }
}

export const deleteProduct = (product_id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: product_id
    }
}

// export const billinCart = (bill_id) =>{
//     return{
//         type:'ADDCART_ORDERS',
//         payload: 'bill_id',
//     }
// }