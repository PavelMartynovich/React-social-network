import React from "react";
import { connect } from "react-redux";
import Users from "./users";
import { followAC } from "../../data/users-reduser";
import { unfollowAC } from "../../data/users-reduser";
import { setUsersAC } from "../../data/users-reduser";
import { setCurrentPageAC } from "../../data/users-reduser";
import { totalCountAC } from "../../data/users-reduser";

let mapStateToProps = (state) => {
    return{
        Users:state.usersReducer.Users,
        totalCount:state.usersReducer.totalCount,
        pageSize:state.usersReducer.pageSize,
        currentPage:state.usersReducer.currentPage
    }; 
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (UserId) => {
            dispatch(followAC(UserId))
        },
        unfollow: (UserId) => {
            dispatch(unfollowAC(UserId))
        },
        setUsers:(Users)=>{
            dispatch(setUsersAC(Users))
        },
        setTotalCount:(count)=>{
            dispatch(totalCountAC(count))
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC(page))
        }

    };
}
let UsersContainer=connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;