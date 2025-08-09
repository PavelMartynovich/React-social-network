import React, { useEffect } from 'react';

import Profile from './profile.jsx';

import { connect } from 'react-redux';

import { useNavigate, useParams} from "react-router-dom";

import { setUsersThunkCreator,updateStatusThunkCreator,getStatusThunkCreator} from '../../data/profile-reducer.js';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';
import { store } from '../../data/redux-store.js';



export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
      
        return <Children {...props}  match={match}/>
    }
}



class ProfileContainer extends React.Component{
componentDidMount(){

let userId = this.props.match.params.userId
    if (!userId) {
      userId= this.props.autorizedUserId
    }
    
    this.props.setUsers(userId)
    this.props.getStatus(userId)
}


render(){
 
  if (this.props.profileInformation==null) {
    return <div>Загрузка профиля...</div>;
  }




  return <Profile match={this.props.match} {...this.props} profileInformation={this.props.profileInformation} status={this.props.status} updateStatus={this.props.updateStatus}/> 
  }
}







const mapStateToProps = (state) => {
  return {
      Posts: state.profilePage.PostData,
      newPostText: state.profilePage.newPostText,
      profileInformation: state.profilePage.profileInformation,
      currentProfile:state.profilePage.currentProfile,
      isAuth:state.auth.isAuth,
      status: state.profilePage.status,
      autorizedUserId: state.auth.userId
}
}



export default compose(
  connect(mapStateToProps, { setUsers: setUsersThunkCreator, getStatus:getStatusThunkCreator, updateStatus:updateStatusThunkCreator }),
  withAuthRedirect,  // сначала защита
  withRouter         // потом прокидываем params
)(ProfileContainer);
