import * as actionTypes from './action';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      // When the GET_USERS_SUCCESS action is dispatched,
      // update the state with the list of users received from the API response.
      return {
        ...state,
        users: action.payload, // The action.payload contains the list of users
      };
    case actionTypes.DELETE_USER_SUCCESS:
      // When the DELETE_USER_SUCCESS action is dispatched,
      // update the state to remove the deleted user from the users list.
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload), // action.payload contains the ID of the deleted user
      };
    default:
      return state;
  }
};

export default userReducer;