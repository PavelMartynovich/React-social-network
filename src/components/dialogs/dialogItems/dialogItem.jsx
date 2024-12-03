import React from "react";
import s from './../dialogs.module.css';
import style from './dialogItem.module.css'
import { NavLink } from "react-router-dom";

function DialogItem(props) {


    return (

        <div className={style.Dialog}>
            <div className={style.img}>
                <img src={props.src}></img>
            </div>
            <div>
                <NavLink to={`/dialogs/${props.id}`}>  {props.name}  </NavLink>
            </div>
        </div>

    );

}
export default DialogItem;