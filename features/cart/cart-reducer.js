
const itemExistInCart = (cart, item) => {
    return cart.find((cartItem) => item.id === cartItem.id);
}

const addToCart = (cart, item) => {
    const result =itemExistInCart(cart, item);
    if (result===null) {
        [...cart, { ...item, quantity: 1 }]  
    }
    else{
        console.log(item);
        [...cart, { ...item, quantity: result.quantity + 1 }]
            
    }
}

const CartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
        addToCart(state,action.payload)
        case "REMOVE":

        default:
            return state;
    }
}

export default CartReducer;