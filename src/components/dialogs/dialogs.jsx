
import React from "react";
import { NavLink, redirect } from "react-router-dom";
import s from './dialogs.module.css';
import Message from "./messages/message";
import DialogItem from "./dialogItems/dialogItem";
import { addMessageActionCreator } from "../../data/dialogs-reducer";
import { updateMessageValueActionCreator } from "../../data/dialogs-reducer";
import {Navigate} from 'react-router-dom'
import { useEffect} from 'react';


function Dialogs(props) {
  
     let MessageArr = props.MessageData.map(el => <Message message={el.message} />)
     let DialogArr = props.DialogData.map(el => <DialogItem name={el.name} id={el.id} src={el.src} />)
     let valueLink = React.createRef()

     let sendMessage = () => {

         props.sendMessage()

     }
     let updateMessageValue = () => {
          
          props.updateMessageValue(valueLink.current.value)
     }

     if (!props.isAuth) {
          return <Navigate to="/login" replace/>
     }


     return (
          <div className={s.Dialogs}>
               <div className={s.DialogsItems}>
                   {DialogArr}
                   
               </div>
               <div className={s.Messages}>
                    {MessageArr}
                    <textarea ref={valueLink} value={props.newMessageText} onChange={updateMessageValue} name="" id=""></textarea>
                    <button onClick={sendMessage}>ОТПРАВИТЬ</button>
               </div>
          </div>
     );
     
}
export default Dialogs;