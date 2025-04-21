import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reduser";
import { authReducer } from "./auth-reduser copy";
 let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersReducer:usersReducer,
    auth:authReducer
})
export let store= configureStore({reducer:reducers})
