import React from "react";
import Users from "../components/users/users";
import { current } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";


let initialState = {
  userId:null,
  email:null,
  login:null
};


export let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
           
            return 


        default:
            return state;
    }
}


export const followAC = (userId,email,login) => ({ type: 'SET_USER_DATA', action:{userId, email,login}});

