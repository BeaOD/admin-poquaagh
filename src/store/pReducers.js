const initialState = {
    products:[
        { 
        productname:'Cape',
        price:'100',
        stock:'10',
        description:'Clothing accessory made from african print',
        image:'',
        id:'p123',
      },
      ]
}


const pReducers = (state= initialState , action) =>{
    switch (action.type) {
        case 'ADD_PRODUCT':
            const addProduct = {
                productname:action.payload.productname,
                price:action.payload.price,
                stock:action.payload.stock,
                description:action.payload.description,
                image:action.payload.image,
            };
            return {...state, products: [...state.products, addProduct]}
         
            case 'EDIT_PRODUCT':
                const editProduct = state.products.map(product=>{
                   if(product.id === action.product_id) {
                       return {...product, ...action.updatedProduct }
                   }
                   else{
                      return product;
                   }
                });
                return {...state, products: editProduct}

        case 'DELETE_PRODUCT':
            const filteredProducts = 
                   state.products.filter(product => product.id !== action.payload);    
               return {...state, products: filteredProducts}
            
        default:
            return state;
    }

}



export default pReducers 