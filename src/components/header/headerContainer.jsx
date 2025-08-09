import React from "react";
import Header from "./header";
import { setAuthUserData } from "../../data/auth-reduser copy";
import { connect } from "react-redux";
import { authAPI } from "../../API/Api";
import { logout } from "../../data/auth-reduser copy";

class HeaderContainer extends React.Component {

    
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    
})
export default  connect(mapStateToProps,{ logout})(HeaderContainer);