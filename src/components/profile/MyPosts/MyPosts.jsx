import React from 'react';
import s from './MyPosts.module.css';
import Post1 from './Post/Post';




function MyPosts(props) {

    console.log(props)
    let PostArr = props.Posts.map(el => <Post1 message={el.message} LikeCount={el.LikeCount} />)

    let newPostElemnt = React.createRef();

    let addPost = () => {
        props.addPost()     
    }
    
    let onPostChange = () => {
        props.onPostChange(newPostElemnt.current.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElemnt} onChange={onPostChange} value={props.newPostText} name="" id=""></textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {PostArr}

            </div>
        </div>
    );
}

export default MyPosts;