import { SET_LOGIN_DETAIL, SET_USER } from '../actions/constants';

const initialState = {
  login: {
    userId: 'asd',
    token: '',
    tokenExpiration: 0,
  },
  createUser: {
    email: '',
    password: null,
    _id: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_DETAIL:
      return {
        ...state,
        login: action.login,
      };
    case SET_USER:
      return {
        ...state,
        createUser: action.createUser,
      };
    default:
      return state;
  }
};
export default userReducer;
