import React, { useEffect } from 'react';
import { useState } from 'react';

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
              <span onDoubleClick={activateInput}>
                {props.status || "------"}
              </span>
            </div>
          }

          {editMode &&<div>
            <input value={status} onBlur={deactivateInput} onChange={onStatusChange} autoFocus={true}/>
          </div>
          }

      </div>
    );

  }



export default ProfileStatusWithHooks;