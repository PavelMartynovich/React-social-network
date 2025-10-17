import React from 'react';


class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status:this.props.status    
    
  }
  activateInput=()=>{ 
    
    this.setState({editMode:true})
  }
  deactivateInput=()=>{

    this.setState({editMode:false})
    this.props.updateStatus(this.state.status)
  }
  onStatusChange=(e)=>{
    this.setState({
      status: e.currentTarget.value
    })

    
  }

  componentDidUpdate(PrevProps, prevStatus ){
    debugger
   if(this.props.status !== PrevProps.status){
    this.setState({status: this.props.status})
  }
}

  render() {

    return (

      <div>

          {!this.state.editMode &&
            <div>
              <span onDoubleClick={this.activateInput}>
                {this.props.status || "------"}
              </span>
            </div>}
          {this.state.editMode &&<div>
            <input  onChange={this.onStatusChange} autoFocus={true} 
                    onBlur={this.deactivateInput} value={this.state.status} />
          </div>
          }

      </div>
    );

  }

}

export default ProfileStatus;