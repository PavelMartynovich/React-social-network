import React, { useEffect } from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks=(props)=>{
 
  let stateWithSetState = useState(false)
  let editMode=stateWithSetState[0]
  let setEditMode=stateWithSetState[1]

  let[status, setStatus]=useState(props.status)

  useEffect(()=>{
    setStatus(props.status)
  },[props.status])

  let activateInput=()=>{ 
    setEditMode(true)
  }
  let deactivateInput=()=>{
    setEditMode(false)
    props.updateStatus(status)
  }
  let onStatusChange=(e)=>{

    setStatus(e.currentTarget.value)
    
  }

    return (

      <div>

          {!editMode&&
            <div>
              <span className={s.profileStatus} onDoubleClick={activateInput}>
                {props.status || "------"}
              </span>
            </div>
          }

          {editMode &&<div>
            <input className={s.inputStatus} value={status} onBlur={deactivateInput} onChange={onStatusChange} autoFocus={true}/>
          </div>
          }

      </div>
    );

  }



export default ProfileStatusWithHooks;