import React from "react";
import Users from "../components/users/users";
import { current } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";


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
            const updateFollow = state.Users.map(el =>
                el.id == action.userId ? { ...el, followed: true } : el
            );
            return { ...state, Users: updateFollow }


        case "unfollowAC":
            const updateUnfollow = state.Users.map(el =>
                el.id == action.userId ? { ...el, followed: false } : el
            );
            return { ...state, Users: updateUnfollow }
        case "setUsersAC":
            return { ...state, Users: action.Users };
        case "totalCountAC":
            return {...state, totalCount:action.count};
        case "setCurrentPageAC":
            return {...state, currentPage:action.page};
        case "toggelIsFetchingAC":
            return {...state, isLoading:action.bull};
        case 'toggleFollowingInProgressAC':
            return{...state, followingInProgress:action.bull }

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

export const toggleFollowingInProgressAC=(bull)=>({type:'toggleFollowingInProgressAC', bull:bull})