import React , { Component } from 'react';
import { render } from 'react-dom';

export default class Header extends Component {

  constructor( props ) {
    super( props );
  }
  componentWillMount() {}
  componentDidMount() {}


  render() {
    return(

<header>
 <div className="container">
   <div className="row">
     <div className="col-sm-7">
       <div className="header-content">
         <div className="header-content-inner">
           <h1>你的音樂著作權救星</h1>
           <a href className="btn btn-outline btn-xl page-scroll" data-toggle="modal" data-target="#model">Try it now!</a>
         </div>
       </div>
     </div>
     <div className="col-sm-5">
       <div className="header-content">
         <div className="header-content-inner">
           <h1>Try it Now</h1>
           <div className="login-form">Email<input id="email" type="text" required="true" className="information" /></div>
           <div className="login-form">Password<input id="password" type="password" required="true" className="information" /></div>
           <input id="login" type="submit" defaultValue="Login " className="submit" />
           <input id="signup" type="submit" defaultValue="Signup" className="submit" />
         </div>
       </div>
     </div>
   </div>
  </div>
</header>
    );
  }
}
