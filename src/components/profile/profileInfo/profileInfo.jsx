/* import React from 'react';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
  if (props.match == null) {
    return <div>жди</div>
  }
  /*   if (!props.profileInformation) {
      return <div>жди</div>
    } //
  return (

    <div className={s.profileContainer}>
      <div className={s.profileStatus}>
        <span className={s.statusBadge}>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </span>
      </div>

      <h1 className={s.profileHeader}>{props.profileInformation.fullName}</h1>
      <p className={s.profileText}>About Me: {props.profileInformation.aboutMe}</p>
      <p className={s.profileText}>
        Looking for a Job: {props.profileInformation.lookingForAJob ? "Yes" : "No"}
      </p>
      <p className={s.profileText}>Description: {props.profileInformation.lookingForAJobDescription}</p>

      <h2 className={s.profileHeader}>Contacts:</h2>
      <ul className={s.profileContacts}>
        {props.profileInformation.contacts &&
          Object.entries(props.profileInformation.contacts).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value || "N/A"}
            </li>
          ))}
      </ul>

      <h2 className={s.profileHeader}>Photos:</h2>
      <div className={s.profilePhotos}>
        <img src={props.profileInformation.photos.small} alt="Small Avatar" />
        <img src={props.profileInformation.photos.large} alt="Large Avatar" />
      </div>
    </div>

  );

}



export default ProfileInfo; */

import React from 'react';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';
import avtar from '../../../assets/images/149071.png'

function ProfileInfo(props) {
  if (props.match == null) {
    return <div>жди</div>;
  }

  const info = props.profileInformation;

  if (!info) {
    return <div>жди</div>;
  }

  return (
    <div className={s.profileContainer}>
      {/* Верхняя секция: фото + имя + статус */}
      <div className={s.profileHeaderSection}>
        <div className={s.profilePhotoWrapper}>
          <img
            src={info.photos.large?info.photos.large:avtar}
            alt="аватар"
            className={s.profilePhoto}
          />
        </div>

        <div className={s.profileMainInfo}>
          <h1 className={s.profileName}>{info.fullName}</h1>
          <div className={s.profileStatusWrapper}>
            <span className={s.statusLabel}>Статус:</span>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
          </div>
        </div>
      </div>

      {/* Информация о себе */}
      <div className={s.profileDetails}>
        <p><strong>Обо мне:</strong> {info.aboutMe || "—"}</p>
        <p><strong>Ищу работу:</strong> {info.lookingForAJob ? "Да" : "Нет"}</p>
        <p><strong>Описание:</strong> {info.lookingForAJobDescription || "—"}</p>
      </div>

      {/* Контакты */}
      <div className={s.profileContactsSection}>
        <h2>Контакты</h2>
        <ul className={s.profileContacts}>
          {info.contacts &&
            Object.entries(info.contacts).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value || "???"}
              </li>
            ))}
        </ul>
      </div>

      {/* Фото */}
      <div className={s.profilePhotos}>
        <h2>Фото</h2>
        <div className={s.photosGrid}>
          {info.photos.small && (
            <img src={info.photos.small} alt="Small Avatar" />
          )}
          {info.photos.large && (
            <img src={info.photos.large} alt="Large Avatar" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
