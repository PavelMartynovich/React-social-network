import React from 'react';
import s from './MyPosts.module.css';
import Post1 from './Post/Post';
import { updatePostValueActionCreator } from '../../../data/profile-reducer';
import { addPostActionCreator } from '../../../data/profile-reducer';
import MyPosts from './MyPosts';
import MyContext from '../../../contenContext';



function MyPostsContainer(props) {

    //let state=props.store.getState();



return (
        <MyContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updatePostValueActionCreator(text))
                    }

                    let state = store.getState();

                    return <MyPosts addPost={addPost} onPostChange={onPostChange}
                        Posts={state.profilePage.PostData}
                        newPostText={state.profilePage.newPostText} />
                }
            }
        </MyContext.Consumer>
    )
}
export default MyPostsContainer;