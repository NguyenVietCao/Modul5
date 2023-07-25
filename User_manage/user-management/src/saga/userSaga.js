import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../redux/action';

// TODO: Define the API URLs
const GET_USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';
const DELETE_USER_API_URL = 'https://jsonplaceholder.typicode.com/users/';

// TODO: Implement the saga function to get users
function* getUsersSaga() {
  try {
    // TODO: Call the GET_USERS_API_URL and store the response in the "users" variable
 
    const response = yield call(axios.get, GET_USERS_API_URL);
    const users = response.data;

    // TODO: Dispatch the GET_USERS_SUCCESS action with the users data
    
    yield put(actionTypes.getUsersSuccess(users));
  } catch (error) {
    // Handle error if needed
  }
}

// TODO: Implement the saga function to delete a user
function* deleteUserSaga(action) {
  try {
    const id = action.payload;
    // TODO: Call the DELETE_USER_API_URL with the provided user ID
   
    yield call(axios.delete, `${DELETE_USER_API_URL}${id}`);

    // TODO: Dispatch the DELETE_USER_SUCCESS action with the deleted user ID
   
    yield put(actionTypes.deleteUserSuccess(id));
  } catch (error) {
    // Handle error if needed
  }
}

// TODO: Implement the watcher saga to watch for GET_USERS and DELETE_USER actions
function* userSaga() {
  // For example:
  yield takeLatest(actionTypes.GET_USERS, getUsersSaga);
  yield takeLatest(actionTypes.DELETE_USER, deleteUserSaga);
}

export default userSaga;