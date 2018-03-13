import React from 'react';
import { withStyles } from 'material-ui/styles';
import ChatMeassages from './ChatMeassages.js';
import InputMessage from './InputMessage.js';


const styles = theme => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    width: '100%',
    height: `calc(100% - 64px)`,
    overflow: 'hidden',
    paddingTop: theme.spacing.unit * 8,
    backgroundColor: '#fafafa'
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
  textField: {
    margin: theme.spacing.unit * 2,
    width: `calc(100% - 32px )`,
  },
});

class Chat extends React.Component {
  render() {
    const { classes, messages } = this.props;
    return(
      <main className={classes.content}>
      <ChatMeassages messages={messages}></ChatMeassages>
      <InputMessage></InputMessage>
    </main>
    )
  }  
}
export default withStyles(styles)(Chat);
