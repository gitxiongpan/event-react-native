import { COUNTER_CHANGE } from "../constants";

const initialState = {
  count: 2,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
