import React from "react";
import {Navigate} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
  
        isAuth:state.auth.isAuth
  }
  }
 

export const withAuthRedirect = (Component) => {

    class RedirectCmponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" replace />
            
            return <Component {...this.props}/>

        }

    }
    let ConnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectCmponent)

    return ConnectedAuthRedirectComponent 
}