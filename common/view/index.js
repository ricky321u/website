import Head from 'next/head'
import React from 'react'
import Link from 'next/link';
import 'styles/index.scss';
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  // static async getInitialState () {
  //   // eslint-disable-next-line no-undef
  //   const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //   const json = await res.json()
  //   return {
  //     stars: json.stargazers_count,
  //   }
  // }

  constructor() {
    super();
    this.state = {
      stars: 'huh?'
    };
  }

  render () {
    return (
      <div>
        <Head>
          <title>This page has a title</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css" rel="stylesheet"/>
          <link rel='stylesheet' href='/static/css/bundle.css' />
        </Head>

        <p className='hahaha'>Next.js has {this.state.stars}</p>
        <Link prefetch href='/preact'><a>How about preact?</a></Link>

        <input value={'button'} type="button" onClick={()=>{
          this.setState({stars: 'blink⭐️'})
        }}/>
      </div>
    )
  }
}

//
// export default () => (
//
//   <div>
//     <Head>
//       <title>This page has a title 🤔</title>
//       <meta charSet='utf-8' />
//       <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//     </Head>
//
//     <h1>This page has a title 🤔</h1>
//     <input type="button" onClick={()=>{
//       this.setState({hahaha: 'yoyo'})
//     }}> button </input>
//   </div>
// )
