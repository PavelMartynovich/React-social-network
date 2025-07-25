import React from "react";
import Users from "../components/users/users";
import { current } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { authAPI } from "../API/Api";


let initialState = {
  userId:null,
  email:null,
  login:null,
  isAuth:false
};


export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":            
            return {...state,
                 ...action.data,
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: 'SET_USER_DATA', data:{userId, email, login, isAuth}});


export const getAuthUserDataThunkCreator = () => {
    return (dispatch)=>{
        authAPI.me()
        .then(response => {
        
                if(response.data.resultCode===0){
                    let {id,login,email}=response.data.data; 
                    dispatch(setAuthUserData(id,email,login, true))
                }
              
            });
    }
};

export const login =(email, password, rememberMe)=>{
    return (dispatch)=>{
        authAPI.login(email, password, rememberMe)
        .then(response => {
                if(response.data.resultCode===0){
                    dispatch(getAuthUserDataThunkCreator())
                }
              
            });
    }
}
export const logout =()=>{

    return (dispatch)=>{
        authAPI.logout()
        .then(response => {
                if(response.data.resultCode===0){
                    dispatch(setAuthUserData(null, null, null, false))
                }
              
            });
    }
}


