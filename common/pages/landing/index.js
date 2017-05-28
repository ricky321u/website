import React , { Component } from 'react';
import { render } from 'react-dom';
import Head from './head';
import Navigate from './navigate';
import Header from './header';
import Footer from './footer';


export default class Index extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
    <div>
      <Navigate/>
       <Header/>
         <section id="features" className="features">
           <div className="container">
             <div className="row">
               <div className="col-lg-12 text-center">
                 <div className="section-heading">
                   <h2>Why blockchain</h2>
                   <p className="text-muted">Because</p>
                   <hr />
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-md-4">
               </div>
               <div className="col-md-4">
                 2
               </div>
               <div className="col-md-4">
                 2
               </div>
                 <div className="container-fluid">
                   <div className="row">
                     <div className="col-md-6">
                       <div className="feature-item">
                         <i className="icon-screen-smartphone text-primary" />
                         <h3>TRANSPARENT</h3>
                         <p className="text-muted" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="feature-item">
                         <i className="icon-settings text-primary" />
                         <h3>Customized</h3>
                         <p className="text-muted" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="feature-item">
                         <i className="icon-speedometer text-primary" />
                         <h3>Free</h3>
                         <p className="text-muted" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="feature-item">
                         <i className="icon-share text-primary" />
                         <h3>Easy to Use</h3>
                         <p className="text-muted" />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
         </section>
         <section className="cta">
           <div className="cta-content overlay">
             <div className="container">
               <h2>Simplicity,<br />Touch the reality.</h2>
               <a href className="btn btn-outline btn-xl page-scroll" data-toggle="modal" data-target="#model">Let's get immersive!</a>
             </div>
           </div>
         </section>
         <section id="contact" className="contact bg-primary">
           <div className="container">
             <h2>Get our discounted quote!</h2>
             <form>
               <div className="form-group"> {/* Email field !*/}
                 <input type="email" className="form-control " id="quote_email" name="email_name" placeholder="name@gmail.com" />
               </div>
               <div className="form-group"> {/* Submit button !*/}
                 <button type="submit" className="btn btn-outline btn-xl">Send</button>
               </div>
             </form>
             <div className="contact_info">
               <h5>Contact US</h5>
               <a href="tel:0918583583">0918-583-583</a><br />
               <a href="mailto:ricky321u@gmail.com">ricky321u@gmail.com</a>
             </div>
           </div>
         </section>
         <Footer />
    </div>
  );
 }
}
