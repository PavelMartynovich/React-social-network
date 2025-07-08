import {useForm} from 'react-hook-form'

const Login= (props) => {
// useForm() возвращает объект значений!!! Поэтому тут мы и делаем деструктуризирующее присваивание 
const{register,
      handleSubmit, 
      formState:{errors},
      watch
   }
      = useForm() 
// handleSubmit дает data в onSubmit

const onSubmit = (data) => console.log(data)
console.log(watch("password")) 

return (
   /* handleSubmit это контейнерная функция 'react-hook-form' ей мы оборачиваем нашу onSubmit, она
   делает проверки, и если все хорошо передает значения собранные из input ов в нашу onSubmit, в виде 
   объекта data
   */
   <form onSubmit={handleSubmit(onSubmit)}>
   <div>
     <input placeholder='логин' {...register("login", { required: 'введите логин' })} />
     <div>{errors.login && errors.login.message }</div> 
   </div>
     
   <div>
     <input placeholder='пароль' {...register("password", { required: 'введите пароль' })} />
     <div>{errors.password&&errors.password.message}</div>
     {/* errors will return when field validation fails  */}
   </div>  

     <input type="checkbox" {...register("checkBox", )} />
      <div> 
         <input type="submit" />
      </div>
    
   </form>
 )

}























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
export default Login