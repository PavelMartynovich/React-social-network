import React from "react";
import { Formik, Form, Field } from "formik";
import { Navigate } from "react-router-dom";
import s from './dialogs.module.css';
import Message from "./messages/message";
import DialogItem from "./dialogItems/dialogItem";

function Dialogs(props) {
     console.log(props.isAuth)
    if (!props.isAuth) {
        
        return <Navigate to="/login" replace />;
    }

    const MessageArr = props.MessageData.map(el => <Message key={el.id} message={el.message} />);
    const DialogArr = props.DialogData.map(el => <DialogItem key={el.id} name={el.name} id={el.id} src={el.src} />);

    return ( <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {DialogArr}
            </div>
            <div className={s.Messages}>
                {MessageArr}

                <Formik
                    initialValues={{ newMessageText: '' }}
                    onSubmit={(values, { resetForm }) => {
                        props.sendMessage(values.newMessageText);
                        resetForm();
                    }}
                >
                    {() => (
                        <Form className={s.form}>
                            <Field className={s.input} as="textarea" name="newMessageText" placeholder="Сообщение..."/>
                            <button className={s.button} type="submit">ОТПРАВИТЬ</button>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    );
}

export default Dialogs;