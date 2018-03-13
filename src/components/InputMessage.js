import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';



const styles = theme => ({
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
class InputMessage extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.inputMessage} >
          <TextField
            id="name"
            placeholder="Type your message…"
            className={classes.textField}
          />
        </Paper>
      </div>
    )
  }
}
export default withStyles(styles)(InputMessage);
