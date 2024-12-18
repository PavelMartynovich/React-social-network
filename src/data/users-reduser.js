import React from "react";
import Users from "../components/users/users";


let initialState = {
    Users: []
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

        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: 'followAC', userId });

export const unfollowAC = (userId) => ({ type: 'unfollowAC', userId });

export const setUsersAC=(Users)=>( {type: 'setUsersAC', Users:Users })
