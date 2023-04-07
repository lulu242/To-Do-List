import { initialState } from './state';

const todoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.payload.data
    }

    case 'ADD_TO_DO': { 
        const idx = state.findIndex((el) => el.id === action.payload.id);
        if(idx > -1){
          const copy = [...state];
          copy[idx] = action.payload;
          return copy
        } else return [...state, action.payload]
      
    }

    case 'TO_DO': {
      const idx = state.findIndex((el) => el.id === action.payload.id);
      const copy = [...state];
      copy[idx].done = !copy[idx].done;
      return copy;
    }

    case 'REMOVE_TO_DO': {
      const idx = state.findIndex((el) => el.id === action.payload.id);
      const copy = [...state];
      copy.splice(idx, 1);
      return copy;
    }

    default:
      return state;
  }
};

export default todoReducer;
