
export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.Quantity, 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.Quantity * product.price, 0)
}

export const productQuantity = (cart, productId) => {
    return cart
        .filter(product => product.id === productId)
        .reduce((Ans, product) => Ans + product.Quantity, 0);

}
console.log(productQuantity);
const Cartreducer = (state, action) => {

    switch (action.type) {

        case "Add":
            console.log("product");
            if (state.cart.some(product => product.id === action.product.id)) {
                alert("product is already in cart");
                return state;
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.product, Quantity: 1 }]
                };
            }

        case "Remove":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            };

        case "Increase":
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.id
                        ? { ...product, Quantity: product.Quantity + 1 }
                        : product
                )
            };
        case "Decrease":
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.id && product.Quantity > 1
                        ? { ...product, Quantity: product.Quantity - 1 }
                        : product
                )
            };
        case "Info":
            return {
                ...state, selectedProduct: action.product
            };



        default:
            state

    }
}

export default Cartreducer;
