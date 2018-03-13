import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Login from './Login';
import Signup from './Signup';



const styles = theme => ({
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: '100%',
  },
  loginPopupWrapper:{
    width: '100%',
    alignItems: 'center'
  },
  loginPopup:{
    marginTop: 100,
    width: 500,
    margin: '0 auto'
  },
  formWrapper: {
    padding: theme.spacing.unit * 4
  }

 
});

class WelcomePage extends React.Component {
  
  state = {
    activeTab: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { classes, login, signup, isAuthenticated } = this.props;
    const { activeTab } = this.state;

    if(isAuthenticated){
      return (
        <Redirect to="/chat" />
      )
    }

    return (
      <div className={classes.appFrame}>
        <AppBar  >
          <Toolbar>
            <Typography variant="title" color="inherit">
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container jastify="center" direction="row" >
          <Grid className={classes.loginPopupWrapper} >
            <Paper className={classes.loginPopup} >
              <AppBar position="static" color="default">
                <Tabs 
                  value={activeTab} 
                  onChange={this.handleTabChange} 
                  fullWidth
                >
                  <Tab label="login" />
                  <Tab label="sign up" />
                </Tabs>
              </AppBar>
              <div className={classes.formWrapper}>              
                {activeTab === 0 &&  <Login onSubmit={login} /> }
                {activeTab === 1 &&  <Signup onSubmit={signup} /> }
              </div>
            </Paper>
          </Grid>

        </Grid>
      </div>
    )
  }
}



export default withStyles(styles)(WelcomePage);
