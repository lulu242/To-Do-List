import { modalState } from './state';

const modalReducer = (state = modalState, action) => {
    switch (action.type) {
      case 'INPUT':{
        const copy = {...state};
        copy.input = action.payload.input;
        return copy
      }
      case 'MODAL': {
        const copy = {...state};
        copy.modal = action.payload.modal;
        return copy
      }
      case 'CORRECT': {
        const copy = {...state};
        copy.correct = action.payload.correct;
        return copy
      }

      default:
        return state;
    }
  }

export default modalReducer