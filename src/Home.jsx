import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
var Lorem = require('react-lorem-component');

class Home extends Component {
  renderNewsletterSignup() {
    return (
      <div style={styles.newsletterContainer}>
        <h1 style={styles.sectionTitle}>Sign up for our newsletter</h1>
        <p>Want to keep up with the latest updates from ClosedLoop?  Sign up for our newsletter and we'll be sure to stay in touch!</p>
        <TextField style={{width: '100%'}} hintText="Email Address"/>
        <FlatButton label="Subscribe Now" style={styles.subscribeButtton}/>
      </div>
    )
  }

  renderIndividualBenefit(title) {
    return (
      <div style={styles.benefit}>
        <img style={{height: '100px', width: '100px', alignSelf: 'center'}} src="http://res.cloudinary.com/dxqtuwks5/image/upload/v1516799843/apps_i9seep.png"/>
        <h4 style={styles.sectionTitle}>
          {title}
        </h4>
        <Lorem style={{textAlign: 'center'}} count="0.5" seed='4' className="ipsum" />
      </div>
    )
  }

  renderBenefitsSection() {
    return (
      <div style={{paddingTop: '80px'}}>
        <div style={styles.interventionBanner}>
          <h1>
            Is your inervention program working?
          </h1>
          <FlatButton label='Find out' style={styles.findOutButton}/>
        </div>
        <div>
          <div style={styles.benefitsTitle}>
            <h1>
              Better, Faster, Or Cheaper? Pick Three
            </h1>
          </div>
          <div style={styles.benefitsContainer}>
            {this.renderIndividualBenefit("Better Results")}
            {this.renderIndividualBenefit("Faster Deployment")}
            {this.renderIndividualBenefit("Lower Costs")}
          </div>
        </div>
      </div>
    )
  }

  renderFooter() {

  }

  renderSlideShow() {
    const images = [
      'http://res.cloudinary.com/dxqtuwks5/image/upload/v1516793940/3b1f25_d6aeb137f2ce4a4fb5af06fbba6a47b5_rqhunq.webp',
      'http://res.cloudinary.com/dxqtuwks5/image/upload/v1516793940/3b1f25_2932027e7d1e4ce29e3ca2a48f186178_iyn6au.webp',
      'http://res.cloudinary.com/dxqtuwks5/image/upload/v1516793940/3b1f25_3ad1fb681f7c49bf90bf814e7bfa9d60_eeb7d3.webp',
    ];

    return (
      <div>
        <Slide
          images={images}
          duration="3500"
          transitionDuration="700"/>
        <div style={styles.departmentBoxContainer}>
          <div style={{...styles.departmentBox, backgroundColor: '#7ad0ab'}}>
            <h3>Payers</h3>
            <Lorem count="1" seed='42' className="ipsum" />
            <FlatButton label="Read More" style={{color: 'white', backgroundColor: '#7bbfa2'}}/>
          </div>
          <div style={{...styles.departmentBox, backgroundColor: '#10a667'}}>
            <h3>Providers</h3>
            <Lorem count="1" seed='42' className="ipsum" />
            <FlatButton label="Read More" style={{color: 'white', backgroundColor: '#228e5c'}}/>
          </div>
          <div style={{...styles.departmentBox, backgroundColor: '#26825b'}}>
            <h3>Pharma</h3>
            <Lorem count="1" seed='42' className="ipsum" />
            <FlatButton label="Read More" style={{color: 'white', backgroundColor: '#317558'}}/>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderSlideShow()}
        {this.renderBenefitsSection()}
        {this.renderFooter()}
        {this.renderNewsletterSignup()}
      </div>
    );
  }
}

export default Home;

const styles = {
  departmentBox: {
    position: 'relative',
    height: '320px',
    width: '320px',
    opacity: '0.9',
    margin: '5px',
    padding: '10px'
  },
  departmentBoxContainer: {
    color: 'white',
    marginTop: '-300px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  interventionBanner: {
    backgroundColor: '#9154a7',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '20px,',
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  findOutButton: {
    color: 'white',
    backgroundColor: '#7e5196',
    alignSelf: 'center',
  },
  benefitsTitle: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30px',
    paddingBottom: '30px',
    color: '#0cb26b'
  },
  benefitsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  benefit: {
    margin: '10px',
    width: '20%',
    padding: '10px',
    color: 'silver',
    display: 'flex',
    flexDirection: 'column'
  },
  newsletterContainer: {
    padding: '60px',
    paddingTop: '85px',
    paddingBottom: '85px',
    backgroundColor: '#f2f2f2'
  },
  subscribeButtton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#9154a7',
    color: 'white',
    width: '100%',
    height: '50px',
    paddingTop: '10px',
  },
  sectionTitle: {
    color: '#0cb26b',
    textAlign: 'center'
  }
}
