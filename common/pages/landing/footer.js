import React , { Component } from 'react';
import { render } from 'react-dom';

export default class Footer extends Component {

  constructor( props ) {
    super( props );
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return(
      <footer>
        <div className="container">
          <p>© Ricky Daniel. All Rights Reserved.</p>
          <ul className="list-inline">
            <li>
              <a href>Privacy</a>
            </li>
            <li>
              <a href>Terms</a>
            </li>
            <li>
              <a href>FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
