import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { followAC } from "../../data/users-reduser";
import { unfollowAC } from "../../data/users-reduser";
import { setUsersAC } from "../../data/users-reduser";
import { setCurrentPageAC } from "../../data/users-reduser";
import { totalCountAC } from "../../data/users-reduser";
import Users from "./users";

class UsersContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }
    onPageChanged = (page)=>{
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render(){return<Users   Users={this.props.Users} 
                            totalCount={this.props.totalCount} 
                            pageSize={this.props.pageSize} 
                            currentPage={this.props.currentPage} 
                            follow={this.props.follow} 
                            unfollow={this.props.unfollow} 
                            onPageChanged={this.onPageChanged}/>}
}
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
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

