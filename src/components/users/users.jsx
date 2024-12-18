import React from 'react';
import s from './users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/149071.png'

function Users(props) {
 if(props.Users.length == 0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
       console.log(response.data.items)
        props.setUsers(response.data.items)
       
    })
 }

    return <div>
        {

            props.Users.map(el =>

            <div className={s.UsersBlock} key={el.id}>


                <div className={s.ava}> <img src={el.photos.small==null?userPhoto:el.photos.small} /> </div>
                <div className={s.shortInfo}> Minsk <br /> {el.name} </div>
                <div className={s.follow}>    {el.followed ? <button onClick={()=>{props.unfollow(el.id)}}>YOU FOLLOWED</button> : <button onClick={()=>{props.follow(el.id)}}>FOLLOW</button>}  </div>


            </div>)
        }
    </div>
}
export default Users;