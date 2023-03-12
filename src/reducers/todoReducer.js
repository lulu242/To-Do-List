import { initialState } from './state';

const todoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      {if (action.payload.todo !== '') {
        return [...state, { id: String(state.length), ...action.payload }];
      }}

    case 'TO_DO':
      {const idx = state.findIndex((el) => el.id === action.payload.id);
      const copy = [...state]
      copy[idx].done = !copy[idx].done
      return copy}

    case 'REMOVE_TO_DO':
      {const idx = state.findIndex((el) => el.id === action.payload.id);
      const copy = [...state];
      copy.splice(idx, 1)
      return copy}
      
    default:
      return state;
  }
};

export default todoReducer;
