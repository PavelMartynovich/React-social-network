import { current } from "@reduxjs/toolkit"
import { usersAPI } from "../API/Api"
import { profileAPI } from "../API/Api"


let intialState =  {
    PostData: [
        { id: 1, message: "Hi, How are you?", LikeCount: '20' },
        { id: 2, message: "It's my first post", LikeCount: '12' },

    ],
    newPostText: 'IT-kamasutra',

    profileInformation:null,
    status:'',
    
}

export const profileReducer = (state=intialState, action) => {
    
let stateCopy={...state}
    switch (action.type) {       
        case "ADD-POST":
            stateCopy.PostData=[...state.PostData,{ id: 3, message:state.newPostText, LikeCount: '0' }]
            stateCopy.newPostText=''
            return stateCopy;
         /*    return{
                ...state,
                PostData:[...state.PostData,{ id: 3, message:state.newPostText, LikeCount: '0' }],
                ...state.newPostText='',
                }; */
        case "UPDATE-POST-VALUE":
            stateCopy.newPostText=action.text 
            return stateCopy
       /*     return{
            ...state,
            newPostText:action.text 
        }; */
        case "SET-USERS-PROFILE":
            stateCopy.profileInformation = action.profile
            return stateCopy
        case "SET-STATUS":
            stateCopy.status = action.status
            return stateCopy
      
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const updatePostValueActionCreator = (text) => ({ type: "UPDATE-POST-VALUE", text: text})
export const setUserProfileActionCreator=(profile)=>({type:'SET-USERS-PROFILE', profile: profile})
export const setStatusActionCreator=(status)=>({type:'SET-STATUS', status: status})

export const setUsersThunkCreator=(userId)=>{

    return (dispatch)=>{
            profileAPI.getProfile(userId)
             .then((response)=>{
      dispatch(setUserProfileActionCreator(response.data))
      
    })
        
    }
}
export const getStatusThunkCreator=(userId)=>{

    return (dispatch)=>{
            profileAPI.getStatus(userId)
             .then((response)=>{
      dispatch(setStatusActionCreator(response.data))
      
    })
        
    }
}
export const updateStatusThunkCreator=(status)=>{

    return (dispatch)=>{
            profileAPI.updateStatus(status)
             .then((response)=>{
                if(response.data.resultCode===0){
                     dispatch(setStatusActionCreator(status))
                }      
    })
        
    }
}
