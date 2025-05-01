import React from "react";
import { connect } from "react-redux";

import { setCurrentPageAC } from "../../data/users-reduser";

import { getUsersThunkCreator } from "../../data/users-reduser";
import { followThunkCreator } from "../../data/users-reduser";
import { unfollowThunkCreator } from "../../data/users-reduser";

import Users from "./users";

import loader from '../../assets/images/b4d657e7ef262b88eb5f7ac021edda87_w200.gif'

import s from './users.module.css';
    
class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
         /*   this.props.toggelIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(response => {
            
            this.props.toggelIsFetching(false)
            this.props.setUsers(response.items);
            this.props.setTotalCount(response.totalCount);
          
        }); */
    }
    onPageChanged = (page)=>{ 
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
       /*  this.props.toggelIsFetching(true)
        
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(response => {
            this.props.setUsers(response.items);
            this.props.toggelIsFetching(false)
        }) */
    }

    render(){return<>     {this.props.isLoading? <img className={s.loader} src={loader}/>:null}
                            <Users   Users={this.props.Users} 
                            totalCount={this.props.totalCount} 
                            pageSize={this.props.pageSize} 
                            currentPage={this.props.currentPage} 
                            follow={this.props.follow} 
                            unfollow={this.props.unfollow} 
                            onPageChanged={this.onPageChanged}
                            followingInProgress={this.props.followingInProgress}
                            />
                            </>}
}
let mapStateToProps = (state) => {
    return{
        Users:state.usersReducer.Users,
        totalCount:state.usersReducer.totalCount,
        pageSize:state.usersReducer.pageSize,
        currentPage:state.usersReducer.currentPage,
        isLoading:state.usersReducer.isLoading,
        followingInProgress:state.usersReducer.followingInProgress,
        
    }; 
}
/* let mapDispatchToProps = (dispatch) => {
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
        },
        toggelIsFetching:(bull)=>{
            dispatch(toggelIsFetchingAC(bull))
        }
    };
} */
export default connect(mapStateToProps, {
    setCurrentPage:setCurrentPageAC,

    follow:followThunkCreator,
    unfollow:unfollowThunkCreator,
    getUsers:getUsersThunkCreator

    
})(UsersContainer)

