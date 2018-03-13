import React from 'react';
import { withStyles } from 'material-ui/styles';

import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from './Avatar';



const styles = theme => ({  
  
}); 

const SidebarListItem = ({ classes, title }) => (
  <ListItem >
    <Avatar colorFrom={title} >
      {title}
    </Avatar>
    <ListItemText primary={title} secondary="Jan 9, 2014" />
  </ListItem>
)



export default withStyles(styles)(SidebarListItem);
