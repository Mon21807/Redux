import { ADD_ITEM } from '../actions/types';

const initialState = {
  items: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
