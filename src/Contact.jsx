import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div style={styles.contactContainer}>
        <h1>Contact Page Coming Soon...</h1>
      </div>
    );
  }
}

const styles = {
  contactContainer: {
    height: '700px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
}
