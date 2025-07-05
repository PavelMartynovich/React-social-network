import React from "react";
import {Field, reduxForm} from "redux-form"

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"логин"} name={"login"} component={"input"} />
         </div>
         <div>
            <Field placeholder={"пароль"} name={"password"} component={"input"}/>
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


const LoginReduxForm = reduxForm({form:'login'})(LoginForm)



const Login = (props) => {
   
   const onSubmit=(banana)=>{
      console.log(banana)
   }

   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )

}

export default Login