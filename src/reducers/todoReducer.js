import { initialState } from './state';

const todoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      return [...state, { id: state.length, ...action.payload }];

    case 'TO_DO':
      const idx = state.findIndex((el) => el.id === action.payload.id);
      const copy = [...state]
      copy[idx].done = !copy[idx].done
      return copy

    default:
      return state;
  }
};

export default todoReducer;
