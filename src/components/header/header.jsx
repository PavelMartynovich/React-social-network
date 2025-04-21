import React from 'react';
import s from "./header.module.css";
import { NavLink } from 'react-router-dom/dist';

function Header(props) {
    return (<header>


        <img className={s.insta_icon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png'></img>
        <div className={s.Header}>
            {props.isAuth ? props.login
                : <NavLink className={s.Log}  to={'/login'}>Login</NavLink>
            }
        </div>
    </header>);
}


export default Header;