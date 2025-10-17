import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/149071.png';
import { NavLink } from 'react-router-dom';




export const User = (props) => {


    return (
        <div className={s.UsersBlock}>

            
                    <NavLink to={'/profile/' + props.user.id}>
                        <div className={s.ava}>
                            <img src={props.user.photos.small == null ? userPhoto : props.user.photos.small} alt="avatar" />
                        </div>
                    </NavLink>
                    <div className={s.shortInfo}>
                        Minsk <br /> {props.user.name}
                    </div>



                    <div className={s.follow}>
                        {


                        props.user.followed ? (
                                <button disabled={props.followingInProgress.some( id => id===props.user.id)} onClick={
                                    () => {
                                        props.unfollow(props.user.id)
                                    }


                                }> YOU FOLLOWED </button>
                            )
                            : (
                                <button disabled={props.followingInProgress.some( id => id===props.user.id)}onClick={
                                    () => {
                                        props.follow(props.user.id)
                                    }

                                }>FOLLOW</button>

                                    
                            )

                        }

                    </div>

          
        </div>
    );
}