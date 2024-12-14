import React from "react";
import Users from "../components/users/users";


let initialState = {
    Users: [
        { id: 1, followed: true, firstName: "Pavel", lastName: "Martynovich", country: "Belarus" },
        { id: 2, followed: true, firstName: "Pavel", lastName: "Martynovich", country: "London" },
        { id: 3, followed: false, firstName: "Pavel", lastName: "Martynovich", country: "Berlin" },
        { id: 4, followed: true, firstName: "Pavel", lastName: "Martynovich", country: "California" },
    ]
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
        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: 'followAC', userId });

export const unfollowAC = (userId) => ({ type: 'unfollowAC', userId });
