import React from "react";
import Header from "./header";
import { setAuthUserData } from "../../data/auth-reduser copy";
import axios from "axios";
import { connect } from "react-redux";
class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me `,{                           
            withCredentials: true
               

    })
    .then(response => {
    
            if(response.data.resultCode===0){
                let {id,login,email}=response.data.data; 
                this.props.setAuthUserData(id,email,login)
            }
          
        });
    }
    
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    
})
export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);