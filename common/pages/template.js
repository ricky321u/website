import React , { Component } from 'react';
import Navigation from './common_parts/navigation';


export default class Template_Official extends Component {
  constructor( props ) {
    super( props );
    this.state = {

    }
  }
  render(){
    return (
      <div>
        <Navigation />
        { this.props.children }
      </div>)
  }
}
