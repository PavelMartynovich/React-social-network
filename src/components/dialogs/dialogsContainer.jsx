
import React from "react";
import { Navigate } from "react-router-dom";
import s from './dialogs.module.css';
import Message from "./messages/message";
import DialogItem from "./dialogItems/dialogItem";
import { addMessageActionCreator } from "../../data/dialogs-reducer";
import { updateMessageValueActionCreator } from "../../data/dialogs-reducer";
import Dialogs from "./dialogs";
import { store } from "../../data/redux-store";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


/* function DialogsContainer(props) {

    //let state = props.store.getState();

     
     
     return (
          <MyContext.Consumer>
               {

                    (store) => {
                         let state = store.getState();
                         let sendMessage = () => {

                              store.dispatch(addMessageActionCreator())

                         }
                         let updateMessageValue = (message) => {

                              store.dispatch(updateMessageValueActionCreator(message))
                         }
                         return <Dialogs sendMessage={sendMessage} updateMessageValue={updateMessageValue} newMessageText={state.dialogsPage.newMessageText} DialogData={state.dialogsPage.DialogData} MessageData={state.dialogsPage.MessageData} />
                    }
               }
          </MyContext.Consumer>
     )
} */
const mapStateToProps = (state) => {
     return {
          newMessageText: state.dialogsPage.newMessageText,
          DialogData: state.dialogsPage.DialogData,
          MessageData: state.dialogsPage.MessageData,
          
     }
}
const mapDispatchToProps = (dispatch) => {
     return {
          sendMessage: () => {

               dispatch(addMessageActionCreator())

          },
          updateMessageValue: (message) => {

               dispatch(updateMessageValueActionCreator(message))
          }
     }
}

compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)




export default 
compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);
