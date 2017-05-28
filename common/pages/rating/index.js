import React , { Component } from 'react';
import fetch from 'isomorphic-fetch';


export default class Rating extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      unfold: false,
      showRate: false,
      rateValue: -1,
      giftpackRate: -1,
      showFeedback: false,
      showGiftpackFeedback: false,
      allDone: false,
      feedback_content: '',
      message_verticle_Y: 40,
      ribbon_origin_Y: -1,

      order_info: {}

    };
    this._slideSlipRibbon = this._slideSlipRibbon.bind(this);
    this._ratingPacker = this._ratingPacker.bind(this);
    this._ratingGiftpack = this._ratingGiftpack.bind(this);
  }

  async componentWillMount() {
    try{

    const {order_id} = this.props.params;
    const _respones = await fetch(`https://client.giftpack.io/api/giftpack/web/v1/receiver/open?order_id=${order_id}`,{
      // mode: 'no-cors',
      method: 'GET',
      // headers: new Headers({
      //   'Access-Control-Allow-Origin': '*',
      //   'accept' : 'application/json',
      //   'content-Type' : 'application/json'
      // })
    })
    const { data } = await _respones.json();
    this.setState({
      order_info: data
    });
    }catch(err){
      console.log(err)
    }
  }

  async _ratingPacker() {
    const { order_id } = this.props.params;
    const { rateValue } = this.state;
    console.log({order_id})
    console.log({rateValue})
    const _respones = await fetch('https://client.giftpack.io/api/giftpack/web/v1/receiver/feedback_packer',{
      method: 'POST',
      mode: 'no-cors',
      // headers: new Headers({
      //   'Accept':'application/json',
      //   'Content-Type':'application/json'
      // }),
      body:  JSON.stringify({
        order_id,
        star: rateValue + 1
      })
    });
    // console.log(_respones.json())
    this.setState({
      giftpackRate: rateValue,
      showFeedback: true,
      showRate: false
    })
  }


  async _ratingGiftpack() {
    const { order_id } = this.props.params;
    const { giftpackRate , feedback_content } = this.state;
    console.log({order_id})
    console.log({giftpackRate})
    const _respones = await fetch('https://client.giftpack.io/api/giftpack/web/v1/receiver/feedback_giftpack',{
      method: 'POST',
      mode: 'no-cors',
      // headers: new Headers({
      //   'Accept':'application/json',
      //   'Content-Type':'application/json'
      // }),
      body:  JSON.stringify({
        order_id,
        star: giftpackRate + 1,
        feedback: feedback_content
      })
    });
    this.setState({
      showGiftpackFeedback: false,
      allDone: true
    });
    // console.log(_respones.json())
  }


  _slideSlipRibbon( e , _event){
    if(_event === 'click') {
      this.setState({unfold: true}); return true;
    }
    const {touches} = e;
    const {ribbon_origin_Y , message_verticle_Y , unfold } = this.state;
    if(ribbon_origin_Y === -1){
      this.setState({ribbon_origin_Y: touches[0].clientY})
    }else{
      const calc = (message_verticle_Y + (touches[0].clientY - ribbon_origin_Y)) * 0.1 ;
      // console.log(calc);
        ( calc <= 40 && calc >=0 ) && this.setState({message_verticle_Y: calc });
        ( !unfold && calc < 0 ) && this.setState({unfold: true});
      //  console.log( message_verticle_Y + (touches[0].clientY - ribbon_origin_Y) )
    }
    // console.log(e.touches[0]);
    // console.log(e.touches[0].clientY);
    // console.log(e.touches[0].pageY);
  }


  _redirect(){
    setTimeout(() => {
      window.location = 'https://itunes.apple.com/us/app/giftpack/id1207605845?ls=1&mt=8';
    }, 2000);
    window.location = 'giftpack.Giftpack.payments://';
  }

  render() {
    const { unfold ,  showRate , rateValue , message_verticle_Y , order_info , showFeedback , allDone , showGiftpackFeedback , giftpackRate , feedback_content } = this.state;
    const { receiver_full_name , receiver_avatar , country_code , is_feeedback_giftpack , is_feeedback_packer , receiver_lang , sender_full_name , sender_phone  , text_content  } = order_info;
    (unfold && !showFeedback && !showRate && !allDone && rateValue === -1 && !is_feeedback_packer ) && setTimeout(()=>{
       this.setState({showRate: true});
    },3000);

    return (
      <div className={`rating-messages-container ${ unfold ? 'active' : '' }`}>
        <div className="rating-messages-wrapper fadeInUp animated">

          <div className="user-info-container fadeInDown animated">
            <div className="user-wrapper">
              <div className="user-picture"><img width='100%'  src={receiver_avatar}/></div>
              <span className="user-name-display">{receiver_full_name}</span>
            </div>
          </div>

          <div className="messages-container">

            <div className="slip-ribbon-container slideInUp animated"  onClick={()=>this._slideSlipRibbon(null , 'click')} onTouchMove={this._slideSlipRibbon} >
              <div className="slip-ribbon-group" style={{transform: `translateY(${message_verticle_Y}px)`}} >
                <div className="slip-ribbon-tip"/>
                <div className="slip-ribbon" /*onClick={()=> !unfold && this.setState({unfold: true})}*//>
              </div>
            </div>

            <div className="messages-wrapper">
              <div className="messages-info-group">
                <div className="sender-info">
                  <div><span>From</span>{sender_full_name}</div>
                  <div className="sender-phone" >{`${country_code} ${sender_phone} `}</div>
                </div>
                <div className="messages-content">
                    {text_content}
                </div>
              </div>
            </div>
          </div>

          <div className="mail-container">
            <div className="mail-cover"/>
          </div>

          <div className={`rating-container ${ showRate ? 'active' : '' }`}>
            <div className="description">
              Give some feedbacks for the service and our super Giftpacker : )
            </div>
            <RateTool currentRate={rateValue} next={(_rate)=>{ this.setState({rateValue: _rate}) }}/>
            {rateValue !== -1 ? <div className="button fadeInUp animated" onClick={ this._ratingPacker }>Rate</div> : ''}
          </div>

          <div className={`rating-container ${ showFeedback ? 'active' : '' }`}>
            <div className="button fadeInUp animated" onClick={()=>{this.setState({ showGiftpackFeedback: true ,  showFeedback: false, })}}>WRITE FEEDBACK</div>
            <div style={{textAlign: 'center' , textDecoration: 'underline' }} onClick={()=>{this.setState({ showFeedback: false, allDone: true })}} className="description">
              I’m Good ,Thank You.
            </div>
          </div>

          <div onClick={this._redirect} className={`gotoapp-container ${ ( allDone || is_feeedback_giftpack ) ? 'active' : '' }`}>TREAT A GIFT BACK</div>
        </div>

      {!is_feeedback_giftpack
       ? <div className={`giftpack-feedback ${ showGiftpackFeedback ? 'active' : '' }`}>
          <div className="giftpack-feedback-container">
            <div className="giftpack-brand"></div>
            <div className="feedback-title">Giftpack Feedback</div>
            <RateTool currentRate={giftpackRate} next={(_rate)=>{ this.setState({giftpackRate: _rate}) }}/>
            <textarea maxLength={100} placeholder={'Write some feedbacks for our serivce and super deliver guys : )'} onChange={(e)=>this.setState({feedback_content: e.target.value})} className="feedback-content" value={feedback_content} width="100%" height="30vh"/>
          </div>
          <div className="feedback-button" onClick={this._ratingGiftpack}  >SEND FEEDBACK</div>
        </div>
       : ''
      }
      </div>
    );
  }
}

class RateTool extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  _rateChange(_rate){
    this.props.next( _rate  );
  }

  _renderRateStar(){
    let array = [];
    for(let i = 0; i<5; i++){
      this.props.currentRate >= i
      ? array.push(<span key={i} className="rate-star active" onClick={()=>this._rateChange(i)}/> )
      : array.push(<span key={i} className="rate-star" onClick={()=>this._rateChange(i)}/>);
    }
    return array;
  }

  render(){

    return (
        <div className="rate-star-container">
          {this._renderRateStar()}
        </div>
    )
  }
}
