const initialState = {
    cartList: ["jogo 1", "jogo 2", "jogo 3"]
}


const cartReducer = (state = initialState, action) => {
 
    if(action.type === "cart/add"){
        return {...state, cartList: [... state.cartList, action.payload]}
    }
    
    return state
}

export default cartReducer