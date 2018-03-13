import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit * 2,
    width: `calc(100% - 32px )`,
  }
});

const Search = ({classes, chats}) => (
  <div className={classes.drawerHeader} >
    <TextField
      id="name"
      type="search"
      placeholder="Name"
      className={classes.textField}
    />
  </div>
)

export default withStyles(styles)(Search);
