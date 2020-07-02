import { SET_LOGIN_DETAIL } from '../actions/constants';

const initialState = {
  loginDetail: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_DETAIL:
      return {
        ...state,
        loginDetail: action.loginDetail,
      };
    default:
      return state;
  }
};
export default userReducer;
