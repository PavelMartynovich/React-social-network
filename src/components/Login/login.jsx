import {useForm} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import s from './login.module.css'
import { connect } from 'react-redux'
import { login } from '../../data/auth-reduser copy'
import { Navigate } from 'react-router-dom'



const Login= (props) => {
// useForm() возвращает объект значений!!! Поэтому тут мы и делаем деструктуризирующее присваивание 
const{register,
      handleSubmit, 
      formState:{errors},
      watch
   }
      = useForm() 
// handleSubmit дает data в onSubmit

const onSubmit = (data) => { props.login(data.login, data.password, data.checkBox, true) }
console.log(watch("password")) 

if(props.isAuth){
   return <Navigate to="/profile" replace />
}

return (
   /* handleSubmit это контейнерная функция 'react-hook-form' ей мы оборачиваем нашу onSubmit, она
   делает проверки, и если все хорошо передает значения собранные из input ов в нашу onSubmit, в виде 
   объекта data
   */
   <form onSubmit={handleSubmit(onSubmit)}>
   <div >
     <input className={errors.login ? s.inputError:s.input} placeholder='логин' {...register("login", { required: 'введите логин' })} />
     <div>{errors.login ? errors.login.message:"\u00A0"}</div>  
   </div>


   <div>
      <div>
         <input className={errors.login ? s.inputError:s.input} placeholder='пароль' {...register("password", { required: 'введите пароль' })} />
              <div>{errors.password?errors.password.message:"\u00A0"}</div>
      </div>
     

     {/* errors will return when field validation fails  */}
   </div>  

     <input type="checkbox" {...register("checkBox", )} />
      <div> 
         <input type="submit" />
      </div>
    
   </form>
 )

}
const mapStateToProps =(state)=> ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)























/*import React from "react";
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"логин"} name={"login"} component={"input"} />
         </div>
         <div>
            <Field placeholder={"пароль"} name={"password"} component={"input"} />
         </div>
         <div>
            <Field type="checkbox" />
         </div>
         <div>
            <button>Log in</button>
         </div>
      </form>
   )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {

   const onSubmit = (banana) => {
      console.log(banana)
   }

   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )

}

*/
