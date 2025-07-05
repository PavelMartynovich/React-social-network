import React from 'react';
import s from'./profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './profileInfo/profileInfo.jsx';
import Post1 from './MyPosts/Post/Post.jsx';
import {useNavigate, useParams} from "react-router-dom";
import { useEffect } from 'react';

function Profile(props) {
  
  
 

    return (

        <div className={s.Profile}>

           <ProfileInfo match={props.match} profileInformation={props.profileInformation} status={props.status} updateStatus={props.updateStatus}/>
          <MyPostsContainer />
            
           
        </div>
    );
  }



export default Profile;