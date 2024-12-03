
import React from "react";
import { NavLink } from "react-router-dom";
import s from './dialogs.module.css';
import Message from "./messages/message";
import DialogItem from "./dialogItems/dialogItem";
import { addMessageActionCreator } from "../../data/dialogs-reducer";
import { updateMessageValueActionCreator } from "../../data/dialogs-reducer";
import Dialogs from "./dialogs";

function DialogsContainer(props) {
     let state=props.store.getState();

     
     let sendMessage = () => {

          props.store.dispatch(addMessageActionCreator())

     }
     let updateMessageValue = (message) => {
          
          props.store.dispatch(updateMessageValueActionCreator(message))
     }
     return <Dialogs sendMessage={sendMessage} updateMessageValue={updateMessageValue} newMessageText={state.dialogsPage.newMessageText} DialogData={state.dialogsPage.DialogData} MessageData={state.dialogsPage.MessageData}/>
}
export default DialogsContainer;