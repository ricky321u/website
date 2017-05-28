import React , { Component } from 'react';
import fetch from 'isomorphic-fetch';


export default class ResetPassword extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      current_input: 0,
      pwd_1: '',
      pwd_2: '',
      message_alert: false
    }
    this._submit = this._submit.bind(this);
  }
  _submit(){
    const { user_token } = this.props.params;
    const {pwd_1 , pwd_2} = this.state;
    if(pwd_1 === pwd_2){
      this.setState({message_alert: false});
      // fetch()
      fetch('https://client.giftpack.io/api/giftpack/web/v1/user/reset',{
        method: 'POST',
        mode: 'no-cors',
        body:  JSON.stringify({
          token: user_token,
          password: pwd_1,
          password_confirm: pwd_2
        })
      }).then(()=>{
        setTimeout(() => {
          window.location = 'https://itunes.apple.com/id1207605845';
        }, 1500);
        window.location = 'giftpack.Giftpack.payments://';
      }).catch(()=>{

      })

    }else{
      this.setState({message_alert: true});
    }
  }

  render(){
    const {current_input , pwd_1 , pwd_2 , message_alert } = this.state;
    return (
      <div className="resetpassword-container">
        <div className="resetpassword-wrapper">
          <div className="lock-icon zoomIn animated" />
          <div className="resetpwd-title rotateInUpLeft animated" />
          <div className={`status_message ${message_alert ? 'error' : ''}`}> Please make sure your <br/> passwords match. </div>
          <div className="input input_1 fadeIn animated">
            <label>ENTER NEW PASSWORD</label>
            <input onChange={({target})=>this.setState({pwd_1: target.value})} value={pwd_1} type="password" autoComplete={false} onBlur={()=>this.setState({current_input: 0})} onFocus={()=>this.setState({current_input: 1})}/>
            <div className={`underline ${ current_input === 1 ? 'active' : '' }`}><div/></div>
          </div>

          <div className="input input_2 fadeIn animated">
            <label>RE-ENTER PASSWORD</label>
            <input onChange={({target})=>this.setState({pwd_2: target.value})} value={pwd_2} type="password" autoComplete={false} onBlur={()=>this.setState({current_input: 0})} onFocus={()=>this.setState({current_input: 2})}/>
            <div className={`underline ${ current_input === 2 ? 'active' : '' }`}><div/></div>
          </div>

          <div className="submit-btn fadeInUp animated" onClick={this._submit}> RESET </div>

        </div>
      </div>
    );
  }
}
