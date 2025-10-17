import React from "react";
import Users from "../components/users/users";
import { current } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { usersAPI } from "../API/Api";
import { UpdateObjectInArray } from "../utils/object-helpers";


let initialState = {
    Users: [],
    pageSize: 30,
    totalCount:1,
    currentPage:1,
    isLoading:false,
    followingInProgress:[]
};


export let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "followAC":   
            return { ...state, Users:  UpdateObjectInArray(state.Users, action.userId, true)  }

        case "unfollowAC":
            return { ...state, Users:  UpdateObjectInArray(state.Users, action.userId, false)  }
           
        case "setUsersAC":
            return { ...state, Users: action.Users };
        case "totalCountAC":
            return {...state, totalCount:action.count};
        case "setCurrentPageAC":
            return {...state, currentPage:action.page};
        case "toggelIsFetchingAC":
            return {...state, isLoading:action.bull};
        case 'toggleFollowingInProgressAC':
            return{...state, followingInProgress: action.bull
                ?[ ...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=>id!=action.userId) }

        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: 'followAC', userId });

export const unfollowAC = (userId) => ({ type: 'unfollowAC', userId });

export const setUsersAC=(Users)=>( {type: 'setUsersAC', Users:Users });

export const totalCountAC=(count)=>( {type: 'totalCountAC', count:count })

export const setCurrentPageAC=(page)=>({type: 'setCurrentPageAC', page:page})

export const toggelIsFetchingAC=(bull)=>({type: 'toggelIsFetchingAC', bull:bull})

export const toggleFollowingInProgressAC=(bull, userId)=>({type:'toggleFollowingInProgressAC', bull:bull, userId:userId })

export const getUsersThunkCreator =(currentPage, pageSize)=>{
    return async (dispatch)=>{
        
        dispatch(toggelIsFetchingAC(true))

        let response = await usersAPI.getUsers(currentPage, pageSize)
            
            dispatch(toggelIsFetchingAC(false))
            dispatch(setUsersAC(response.items));
            dispatch(totalCountAC(response.totalCount));
          
    
    }
}
export const followThunkCreator =(userId)=>{
    return async (dispatch)=>{
        dispatch(toggleFollowingInProgressAC(true, userId))

        let response = await usersAPI.postUsers(userId)

                if (response.data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(toggleFollowingInProgressAC(false, userId))

    }
}

export const unfollowThunkCreator =(userId)=>{
    return async (dispatch)=>{
        dispatch(toggleFollowingInProgressAC(true, userId))
       
        let response =await usersAPI.deleteUsers(userId)

                if (response.data.resultCode === 0) {
                    dispatch(unfollowAC(userId))
                } 
                dispatch(toggleFollowingInProgressAC(false, userId))

     
    }
}