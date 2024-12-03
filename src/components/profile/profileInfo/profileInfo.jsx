import React from 'react';
import s from'./ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div >

            <div>
                <img  src='https://img.freepik.com/premium-photo/sportsman-flying-paraglider-beautiful-paraglide-generative-ai_756405-12670.jpg' /> 
            </div>
            <div className={s.description}>
                <a>ava+description</a>
            </div>
      
           
        </div>
    );
  }



export default ProfileInfo;