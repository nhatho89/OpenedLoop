import React, { Component } from 'react';
import OpenedLoop from './openedLoop.png';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img style={styles.logoImage} src={OpenedLoop}></img>
      </div>
    );
  }
}

const styles = {
  logoImage: {
    height: '40px',
    paddingTop: '10px',
    paddingBottom: '10px'
  }
}
