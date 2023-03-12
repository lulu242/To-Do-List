export const addToDo = (id, todo) => {
    return {
        type: 'ADD_TO_DO',
        payload: {
            id,
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

export const CorrectSet = (correct) => {
    return {
        type: 'CORRECT',
        payload: {
            correct
        }
    }
}