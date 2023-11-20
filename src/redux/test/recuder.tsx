const initialState = {
    test: ["teste 1", "teste 2", "teste 3"]
}

const testReducer = (state = initialState, action) => {
    if(action.type === "test/add"){
        return {...state, test: [...state.test, action.payload]}
    }
    
    return state
}

export default testReducer