import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div style={styles.containerStyle}>
        <div style={styles.textStyle}>
          <p>2017 by OpenedLoop</p>
          <p>123 Fake St, Austin, TX 78701</p>
        </div>
        <img style={styles.logoStyle} src="http://res.cloudinary.com/dxqtuwks5/image/upload/v1516802602/twitter_vxucew.png"/>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#6dcca3',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px'
  },
  textStyle: {
    color: 'white',
    alignSelf: 'center'
  },
  logoStyle: {
    height: '100px'
  }
}
