import React , { Component } from 'react';
import { render } from 'react-dom';
import Footer from '../common_parts/footer';
import { Element , scroller } from 'react-scroll'

export default class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'sfo'
    };
  }
  componentWillMount() {}
  componentDidMount() {}

  _goto(_target='', offset=0){
    scroller.scrollTo(_target, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset
    })
  }

  render() {
    return (
      <div>
        <section className="section-privacy">
          <div className="navigator-faq">
            <div className="faq-group">
              <div className="giftpack-logo"></div>
              <div onClick={()=>location.href = '/' } className="privacy">PRIVACY POLICE</div>
            </div>
            <div className="link-group-faq">
              <ul>
                <li><a href="">CUSTOMER</a></li>
                <li><a href="">PACKER</a></li>
              </ul>
            </div>
          </div>
          <div className="container-privacy">
              <div className="container-privacy-words">
                <div>NEW JOURNEY FOR</div>
                <div>SOMEONE WITH A WARM HEART</div>
              </div>
              <div onClick={()=>this._goto('privacytext',-20)} className="container-privacy-btn">
                 <span className="btn_words">How Giftpack Works</span>
              </div>
          </div>
        </section>
        <section className="privacy-content">
          <div className="content"></div>
          <Element name="privacytext" className="faqcontent-role">
            <div className="privacy-header">Privacy-policy </div>
              <div className="faqcontent-description">
                Everyone will be treated as family in Giftpack</div>
          </Element>
          <div className="information">This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</div>
          <div className="privacy-questiondiv">
            <div className="h2-padding"><h2>Privacy Policy of Giftpack</h2></div>
            <div className="privacy-answer">In order to receive information about your Personal Data, the purposes and the parties the Data is shared with, contact the Owner.</div>
            <div className="h2-padding"><h2>Data Controller and Owner</h2></div>
            <div className="privacy-question">Types of Data collected</div>
            <div className="privacy-answer">The owner does not provide a list of Personal Data types collected.
Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection.<br/>
The Personal Data may be freely provided by the User, or collected automatically when using this Application.<br/>
Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User.<br/>
Failure to provide certain Personal Data may make it impossible for this Application to provide its services.<br/>
Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.</div>
            <div className="h2-padding"><h2>Mode and place of processing the Data</h2></div>
            <div className="privacy-question">Methods of processing</div>
            <div className="privacy-answer">The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time.</div>
            <div className="privacy-question">Place</div>
            <div className="privacy-answer">The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller.</div>
            <div className="privacy-question">Retention time</div>
            <div className="privacy-answer">The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data.</div>
            <div className="h2-padding"><h2>Additional information about Data collection and processing</h2></div>
            <div className="privacy-question">Legal action</div>
            <div className="privacy-answer">The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services.
The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities.</div>
            <div className="privacy-question">Additional information about User's Personal Data</div>
            <div className="privacy-answer">In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request.</div>
            <div className="privacy-question">System logs and maintenance</div>
            <div className="privacy-answer">For operation and maintenance purposes, this Application and any third party services may collect files that record interaction with this Application (System logs) or use for this purpose other Personal Data (such as IP Address).</div>
            <div className="privacy-question">Information not contained in this policy</div>
            <div className="privacy-answer">More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document.</div>
            <div className="privacy-question">The rights of Users</div>
            <div className="privacy-answer">Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.<br/>
This Application does not support “Do Not Track” requests.
To determine whether any of the third party services it uses honor the “Do Not Track” requests, please read their privacy policies.</div>
            <div className="privacy-question">Changes to this privacy policy</div>
            <div className="privacy-answer">The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.</div>
            <div className="privacy-question">Information about this privacy policy</div>
            <div className="privacy-answer">The Data Controller is responsible for this privacy policy, prepared starting from the modules provided by Iubenda and hosted on Iubenda's servers.</div>
            <div className="h2-padding"><h2>Definitions and legal references</h2></div>
            <div className="privacy-question">Personal Data (or Data)</div>
            <div className="privacy-answer">Any information regarding a natural person, a legal person, an institution or an association, which is, or can be, identified, even indirectly, by reference to any other information, including a personal identification number.</div>
            <div className="privacy-question">Usage Data</div>
            <div className="privacy-answer">Information collected automatically from this Application (or third party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system andor the User's IT environment.
            </div>
            <div className="privacy-question">User</div>
            <div className="privacy-answer">The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refers.</div>
            <div className="privacy-question">Data Subject</div>
            <div className="privacy-answer">The legal or natural person to whom the Personal Data refers.</div>
            <div className="privacy-question">Data Processor (or Data Supervisor)</div>
            <div className="privacy-answer">The natural person, legal person, public administration or any other body, association or organization authorized by the Data Controller to process the Personal Data in compliance with this privacy policy.</div>
            <div className="privacy-question">Data Controller (or Owner)</div>
            <div className="privacy-answer">The natural person, legal person, public administration or any other body, association or organization with the right, also jointly with another Data Controller, to make decisions regarding the purposes, and the methods of processing of Personal Data and the means used, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.</div>
            <div className="privacy-question">This Application</div>
            <div className="privacy-answer">The hardware or software tool by which the Personal Data of the User is collected</div>
            <div className="privacy-question">Legal information</div>
            <div className="privacy-answer">Notice to European Users: this privacy statement has been prepared in fulfillment of the obligations under Art. 10 of EC Directive n. 95/46/EC, and under the provisions of Directive 2002/58/EC, as revised by Directive 2009/136/EC, on the subject of Cookies.<br/>
This privacy policy relates solely to this Application.</div>
            <div className="privacy-question">What personal information do we collect from the people that visit our blog, website or app?</div>
            <div className="privacy-answer">When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, credit card information or other details to help you with your experience.</div>
            <div className="privacy-question">When do we collect information?</div>
            <div className="privacy-answer">We collect information from you when you register on our site, place an order, subscribe to a newsletter or enter information on our site.</div>
            <div className="privacy-question">How do we use your information?</div>
            <div className="privacy-answer">We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways: <br /> To personalize user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.<br/>To improve our website in order to better serve you. <br/> To administer a contest, promotion, survey or other site feature. <br/> To quickly process your transactions. <br /> To send periodic emails regarding your order or other products and services.</div>
            <div className="privacy-question">How do we protect visitor information?</div>
            <div className="privacy-answer">Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible. We use regular Malware Scanning. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information. All transactions are processed through a gateway provider and are not stored or processed on our servers.</div>
            <div className="privacy-question">Do we use 'cookies'?</div>
            <div className="privacy-answer">Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</div>
            <div className="privacy-question">We use cookies to:</div>
            <div className="privacy-answer">Help remember and process the items in the shopping cart.<br/>Keep track of advertisements.<br/>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.<br/> You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser like &#40;Internet Explorer&#41; settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies. If you disable cookies off, some features will be disabled It won't affect the user's experience that make your site experience more efficient and some of our services will not &#102;unction properly.
            However, you can still place orders. </div>
            <div className="privacy-question">Third-party disclosure</div>
          </div>
        </section>

        <section className="footer">
        <div className="official-layout"> <Footer /></div>
        </section>

        </div>
      );
    }
  }
