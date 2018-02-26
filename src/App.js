import React from 'react';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';


import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import TextField from 'material-ui/TextField';


import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';

import Paper from 'material-ui/Paper';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';



const drawerWidth = 320;


const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'

  },   

  textField: {
    margin: theme.spacing.unit * 2,   
    width: `calc(100% - 32px )`,
  },
  listWrapper: {
    overflowY: 'hidden',
    height: `calc(100% - 128px)`,
    '&:hover': {
      overflowY: 'scroll',
    }
  },
  bottomNav:{

  },
  

  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 90,
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    width: '100%',    
    height: `calc(100% - 64px)`,
    overflow: 'hidden',
    
    paddingTop: '64px',
    backgroundColor: '#fafafa'   
  },
  wrapper: {
    overflowY: 'auto',    
    height: '100%',
    width: '100%',    
  },

  messageWrapper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  messageWrapperFromMe: {
    '&& div:last-child': {
      backgroundColor: '#e6dcff'
    },
    flexDirection: 'row-reverse',
    
  },
  
  avatar: {
    margin: 10,
    alignItems: 'center'
  },
  message: {    
    padding: theme.spacing.unit,
    
  },
  messageUser: {    
    color: '#607d8b',
    lineHeight: 1.5
  },
  messageText: {
    lineHeight: 1.5
  },
  messageDate: {
    lineHeight: 1.5
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
    
  },
  inputMessage: {
    margin: theme.spacing.unit * 3,
  },
 
});

class App extends React.Component {
 
  
  render() {
    const { classes } = this.props;
    return (
      
        
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Permanent drawer
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          
          >
            <div className={classes.drawerHeader} >
            <TextField
              id="name"
              placeholder="Name"
              className={classes.textField}        
            />
            </div>
            <Divider />
            
            <div className={classes.listWrapper}>
              <List>
                    <ListItem>
                      <Avatar>
                        de
                      </Avatar>
                      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <ListItem>
                      <Avatar>
                        de
                      </Avatar>
                      <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <ListItem>
                      <Avatar>
                        ed
                      </Avatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
              </List>
            </div>
            <div className={classes.addButton}>
              <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                <AddIcon />
              </Button>
            </div>
           
            <Divider />
            
            <div className={classes.bottomNav}>            
              <BottomNavigation
                showLabels
              >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />             
              </BottomNavigation>
            </div>
          </Drawer>
        
          <main className={classes.content}>
          <div className={classes.wrapper}>
            <div className={classes.messageWrapper}>
              <Avatar className={classes.avatar}>H</Avatar>
              <Paper  className={classes.message}>
                <Typography variant="caption" className={classes.messageUser}>Guest</Typography>
                <Typography variant="body1" className={classes.messageText}>Hello, my first message</Typography>
                <Typography variant="caption" className={classes.messageDate}>one minute ago</Typography>
              </Paper>
            </div>

            <div className={`${classes.messageWrapper} ${classes.messageWrapperFromMe}`}>
              <Avatar className={classes.avatar}>H</Avatar>
              <Paper  className={classes.message}>
                <Typography variant="caption" className={classes.messageUser}>Guest</Typography>
                <Typography variant="body1" className={classes.messageText}>Hello, my first message</Typography>
                <Typography variant="caption" className={classes.messageDate}>one minute ago</Typography>
              </Paper>
            </div>            
           
            </div>
            <div  className={classes.messageInputWrapper}>
              <Paper  className={classes.inputMessage} >
                <TextField
                  id="name"
                  placeholder="Type your message…"
                  className={classes.textField}        
                />
              </Paper>
            </div>
          </main>     
        </div>   
    );
  }
}



export default withStyles(styles)(App);
