import React from "react";
import Header from "./header";
import { setAuthUserData } from "../../data/auth-reduser copy";
import axios from "axios";
import { connect } from "react-redux";
import { authAPI } from "../../API/Api";
import { getAuthUserDataThunkCreator } from "../../data/auth-reduser copy";
class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserDataThunkCreator()

    }
    
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    
})
export default connect(mapStateToProps,{getAuthUserDataThunkCreator})(HeaderContainer);