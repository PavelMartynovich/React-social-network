import React from 'react';
import s from "./header.module.css";
import { Navigate } from 'react-router-dom'


function Header(props) {
    return (<header className={s.Header}>


        <div className={s.Login}>
            <img className={s.insta_icon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png'></img>

            {props.isAuth ? 
                <div> 
                    <div>{props.login} </div>
                    <button onClick={props.logout}> Log out </button>
                </div> 
                : <Navigate className={s.Log}  to={'/login'}>Login</Navigate>
            }
        </div>
    </header>);
}


export default Header;