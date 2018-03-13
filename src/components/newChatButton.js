import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 90,
  }
});

const NewChatButton = ({classes, chats}) => (
  <div className={classes.addButton}>
    <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
      <AddIcon />
    </Button>
  </div>
)

export default withStyles(styles)(NewChatButton);
