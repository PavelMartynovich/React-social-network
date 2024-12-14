import React from 'react';
import s from './users.module.css'

function Users(props) {
    return <div>
        {

            props.Users.map(el =>

            <div className={s.UsersBlock} id={el.id}>


                <div className={s.ava}> <img src="https://imgv3.fotor.com/images/gallery/american-anime-stule-naked-man-avatar.jpg" /> </div>
                <div className={s.shortInfo}> {el.country} <br /> {el.firstName}{el.lastName} </div>
                <div className={s.follow}>    {el.followed ? <button onClick={()=>{props.unfollow(el.id)}}>YOU FOLLOWED</button> : <button onClick={()=>{props.follow(el.id)}}>FOLLOW</button>}  </div>


            </div>)
        }
    </div>
}
export default Users;