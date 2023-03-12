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

export const RemoveToDo = (id) => {
    return {
        type: "REMOVE_TO_DO",
        payload: {
            id
        }
    }
}

export const InputSet = (input) => {
    return {
        type: 'INPUT',
        payload: {
            input
        }
    }
}

export const ModalSet = (modal) => {
    return {
        type: 'MODAL',
        payload: {
            modal
        }
    }
}