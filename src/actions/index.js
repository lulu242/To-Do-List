export const addToDo = (todo) => {
    return {
        type: 'ADD_TO_DO',
        payload: {
            todo,
            done: false
        }
    }
}

export const toDo = (id) => {
    return {
        type: 'TO_DO',
        payload: {
            id
        }
    }
}