import React , { Component , PropTypes } from 'react';
import { Helmet } from 'react-helmet';


export default class Head extends Component {

  static propTypes = {
    LANG: PropTypes.string.isRequired,
  }
  static defaultProps = {
    LANG: PropTypes.string.isRequired,
  }

  constructor( props ) {
    super( props );
  }
  render(){
    return(
      <Helmet>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta property="og:image" content=""/>
        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:url" content=""/>
        <meta property="og:site_name" content=""/>
        <meta property="og:type" content="website"/>
        <meta property="fb:app_id" content=""/>
        <title>Giftpack</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    )
  }
}
