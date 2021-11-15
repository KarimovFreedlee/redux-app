const initialState = {
    count: 0
}


export const mainReducer =  (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {...state, count: state.count + 1}
        case 'REMOVE':
            return {...state, count: state.count - 1}
        default:
            return state
    }
}