import React from "react";
import { profileReducer } from "./profile-reducer";
import { addPostActionCreator } from "./profile-reducer";
import { deletePostActionCreator } from "./profile-reducer";

let State =  {
    PostData: [
        { id: 1, message: "Hi, How are you?", LikeCount: '20' },
        { id: 2, message: "It's my first post", LikeCount: '12' },

    ],
    

    profileInformation:null,
    status:'',
    
}

test('new post should be added',()=>{
    //test data
let action= addPostActionCreator('ololo')
    //acton
let newState= profileReducer(State, action)
    //expectation 
expect(newState.PostData.length).toBe(3)
})

test(('after delitng length of array should be decrement'),()=>{
let action = deletePostActionCreator(3)
let newState = profileReducer (State, action)
expect(newState.PostData.length).toBe(2)
})