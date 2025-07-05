import React from 'react';
import ProfileStatus from './ProfileStatus';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
  if (props.match==null) {
    return <div>жди</div>
  }
/*   if (!props.profileInformation) {
    return <div>жди</div>
  } */
  return (

    <div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <h1>{props.profileInformation.fullName}</h1>
      <p>About Me: {props.profileInformation.aboutMe}</p>
      <p>Looking for a Job: {props.profileInformation.lookingForAJob ? "Yes" : "No"}</p>
      <p>Description: {props.profileInformation.lookingForAJobDescription}</p>
      <h2>Contacts:</h2>
      <ul>
        {props.profileInformation.contacts &&
          Object.entries(props.profileInformation.contacts).map(([key, value]) => (
            <li key={key}>
              {key}: {value || "N/A"}
            </li>
          ))}
      </ul>

      <h2>Photos:</h2>
      <img src={props.profileInformation.photos.small} alt="Small Avatar" />
      <img src={props.profileInformation.photos.large} alt="Large Avatar" />
    </div>
  );

}



export default ProfileInfo;