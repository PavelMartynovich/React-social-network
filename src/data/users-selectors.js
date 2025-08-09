import { createSelector } from "reselect"

export const getsUsers=(state)=>{
    return state.usersReducer.Users
}
export const getTotalCount=(state)=>{
    return state.usersReducer.totalCount
}
export const getPageSize=(state)=>{
    return state.usersReducer.pageSize
}
export const getCurrentPage=(state)=>{
    return state.usersReducer.currentPage
}
export const getIsLoading=(state)=>{
    return state.usersReducer.isLoading
}
export const getFollowingInProgress=(state)=>{
    return state.usersReducer.followingInProgress
}