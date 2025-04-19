import React from 'react';
import { setUserProfileActionCreator } from '../../data/profile-reducer.js';
import Profile from './profile.jsx';
import { connect } from 'react-redux';
import axios from 'axios';

import {useParams} from "react-router-dom";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}
class ProfileContainer extends React.Component{
componentDidMount(){
let userId =this.props.match.params.userId
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then((response)=>{
      console.log(response.data)
      this.props.setUserProfile(response.data)
      
    })
}
render(){
  
  return <Profile profileInformation={this.props.profileInformation} />
  
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    
      setUserProfile: (profile) => {
          dispatch(setUserProfileActionCreator(profile))
      }
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


export default connect(mapStateToProps, mapDispatchToProps)(WhitsUrlContainerComponent);