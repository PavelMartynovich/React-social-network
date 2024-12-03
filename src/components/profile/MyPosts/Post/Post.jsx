import React from 'react';
import s from './Post.module.css'
function Post1(props) {


  return (
    <div className={s.Posts}>
      <img src='https://static.mk.ru/upload/entities/2022/07/21/12/articles/detailPicture/96/f0/5b/38/74b9187ed30c23111af2abb4171776e9.jpg'></img>
      
        {props.message}
      
      <div>
        {props.LikeCount} Likes
      </div>
    </div>
  );
}



export default Post1;