import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reduser';
import { authReducer } from './auth-reduser copy';
import { appReducer } from './app-reducer';
//import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersReducer: usersReducer,
  auth: authReducer,
  app: appReducer
  //form: formReducer     
});

export const store = configureStore({
  reducer: reducers,
  
});