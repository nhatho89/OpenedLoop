import React, { Component } from 'react';
import {AppBar} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './Home.jsx';
import Solutions from './Solutions.jsx';
import Contact from './Contact.jsx';
import Logo from './Logo.jsx';
import FlatButton from 'material-ui/FlatButton';
import Footer from './Footer.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <AppBar title="123 Fake St, Austin, TX" position="fixed"/>
            <Router>
              <div>
                <div style={styles.tabs}>
                  <Logo/>
                  <Link style={styles.tab} to="/"><div><FlatButton label="Home"/></div></Link>
                  <Link style={styles.tab} to="/departments"><div><FlatButton label="Solutions"/></div></Link>
                  <Link style={styles.tab} to="/contact"><div><FlatButton label="Contact"/></div></Link>
                </div>
                <Route exact path="/" component={Home}/>
                <Route path="/departments" component={Solutions}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </Router>
          </div>
        </MuiThemeProvider>
        <Footer/>
      </div>
    );
  }
}

const styles = {
  tabs: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: '60px',
    paddingBottom: '60px'
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}
