import { initialState } from './state';

const todoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case 'ADD_TO_DO': {
      if (action.payload.todo !== '') {
        if(action.payload.id) {
          const idx = state.findIndex((el) => el.id === action.payload.id);
          const copy = [...state];
          copy[idx].todo = action.payload.todo
          return copy
        } else return [...state, {...action.payload,  id: String(state.length)}];
      }
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
