import React from 'react';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Avatar from './Avatar';
import Paper from 'material-ui/Paper';





const styles = theme => ({
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
    maxWidth: '70%',
    minidth: '10%',
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
  }
});
const Message = ({ classes, sender, content }) => (

  <div className={`${classes.messageWrapper} ${sender === "me" ? `${classes.messageWrapperFromMe}` : ''}`}>
    <Avatar colorFrom={sender} className={classes.avatar}>
      {sender}
    </Avatar>
    <Paper className={classes.message}>
      <Typography variant="caption" className={classes.messageUser}>
        {sender}
      </Typography>
      <Typography variant="body1" className={classes.messageText}>
        {content}
      </Typography>
      <Typography variant="caption" className={classes.messageDate}>
        1 min ago
    </Typography>
    </Paper>
  </div>

)

export default withStyles(styles)(Message);
