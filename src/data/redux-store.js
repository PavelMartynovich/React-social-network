import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
 let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})
export let store= configureStore({reducer:reducers})
