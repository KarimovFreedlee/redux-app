const ADD = 'ADD'
const REMOVE = 'REMOVE'

const actionCreateAdd = (value) => {
    return {
        type: ADD,
        payload : value
    }
}

const actionCreateRemove = (value) => {
    return {
        type: REMOVE,
        payload: value
    }
}



export {
    actionCreateAdd,
    actionCreateRemove
}