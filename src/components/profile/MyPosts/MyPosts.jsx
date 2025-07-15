import React from 'react';
import s from './MyPosts.module.css';
import Post1 from './Post/Post';
import { useForm } from 'react-hook-form';



function MyPosts(props) {

    const{register,
          handleSubmit,
          reset
         }
         =useForm()
    

    let PostArr = props.Posts.map(el => <Post1 message={el.message} LikeCount={el.LikeCount} />)

   /*  let newPostElemnt = React.createRef(); */

    let addPost = () => {
        props.addPost()     
    }
    
/*     let onPostChange = () => {
        props.onPostChange(newPostElemnt.current.value)
    } */
    const onSubmit = (data)=>{
        
        props.addPost(data.Post)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <input placeholder='Введите сообщение' {...register('Post')} />
                    {/* <textarea ref={newPostElemnt} onChange={onPostChange} value={props.newPostText} name="" id=""></textarea> */}
                </div>

                <div> 
                    <input type="submit" />
                </div>
            </div>
            <div className={s.posts}>

                 { PostArr }

            </div>
        </div>

        </form>

    );
}

export default MyPosts;