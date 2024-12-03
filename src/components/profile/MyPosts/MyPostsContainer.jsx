import React from 'react';
import s from './MyPosts.module.css';
import Post1 from './Post/Post';
import { updatePostValueActionCreator } from '../../../data/profile-reducer';
import { addPostActionCreator } from '../../../data/profile-reducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {
    
    let state=props.store.getState();
    
    let addPost = () => {

        props.store.dispatch(addPostActionCreator())
    }
   
    let onPostChange = (text) => {
        props.store.dispatch(updatePostValueActionCreator(text))
    }

    return (<MyPosts addPost={addPost} onPostChange={onPostChange} Posts={state.profilePage.PostData} 
    newPostText={state.profilePage.newPostText} />);

}

export default MyPostsContainer;