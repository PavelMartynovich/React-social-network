import React from "react";
import Users from "../components/users/users";
import { current } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { authAPI } from "../API/Api";
import { getAuthUserDataThunkCreator } from "./auth-reduser copy";



let initialState = {
  initialized:false                                                                                     
};


export let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":            
            return {...state,
                initialized:true 
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({ type: 'INITIALIZED_SUCCESS'});


export const initializeApp = () => (dispatch) => {
    let promise= dispatch(getAuthUserDataThunkCreator())
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess())
    })
}