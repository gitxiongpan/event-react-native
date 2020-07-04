import { SET_EVENTS } from '../actions/constants';

const initialState = {
  events: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    default:
      return state;
  }
};
export default eventReducer;
