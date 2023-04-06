export const addToDo = (data) => {
    return {
        type: 'ADD_TO_DO',
        payload: data
 
    }
}

export const toDo = (data) => {
    return {
        type: 'TO_DO',
        payload: data
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

export const Init = (data) => {
    return {
        type: 'INIT',
        payload: {
            data
        }
    }
}