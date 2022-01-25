import {isAuthenticated} from '../utils/auth';

const initialState = {
  isLoggedIn: isAuthenticated(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export {initialState, reducer};
