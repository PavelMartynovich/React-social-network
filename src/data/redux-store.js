import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reduser';
import { authReducer } from './auth-reduser copy';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersReducer: usersReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: reducers,
  
});