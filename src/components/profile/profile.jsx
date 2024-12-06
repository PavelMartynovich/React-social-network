import React from 'react';
import s from'./profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './profileInfo/profileInfo.jsx';
import Post1 from './MyPosts/Post/Post.jsx';
function Profile(props) {

    
    return (

        <div className={s.Profile}>

          <ProfileInfo />
          <MyPostsContainer />
            
           
        </div>
    );
  }



export default Profile;