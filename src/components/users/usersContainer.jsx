import React from "react";
import { connect } from "react-redux";
import Users from "./users";
import { followAC } from "../../data/users-reduser";
import { unfollowAC } from "../../data/users-reduser";

let mapStateToProps = (state) => {
    return{
        Users:state.usersReducer.Users
       
    }
   
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (UserId) => {
            dispatch(followAC(UserId))
        },
        unfollow: (UserId) => {
            dispatch(unfollowAC(UserId))
        },
    };

}
let UsersContainer=connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;