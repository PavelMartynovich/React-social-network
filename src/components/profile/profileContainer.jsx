import React from 'react';

import Profile from './profile.jsx';

import { connect } from 'react-redux';

import {useParams} from "react-router-dom";

import { setUsersThunkCreator } from '../../data/profile-reducer.js';



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
      userId=2;
    }
    
    this.props.setUsers(userId)
}
render(){
  if (this.props.profileInformation==null) {
    return <div>Загрузка профиля...</div>;
  }
  return <Profile {...this.props} profileInformation={this.props.profileInformation}/> 
  }
}


const mapStateToProps = (state) => {
  return {
      Posts: state.profilePage.PostData,
      newPostText: state.profilePage.newPostText,
      profileInformation: state.profilePage.profileInformation,
      currentProfile:state.profilePage.currentProfile
}
}


const WhitsUrlContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUsers:setUsersThunkCreator})(WhitsUrlContainerComponent);