import React from 'react';
import { withStyles } from 'material-ui/styles';

import List from 'material-ui/List';
import SidebarListItem from './SidebarListItem.js';


const styles = theme => ({  
  listWrapper: {
    overflowY: 'hidden',
    height: `calc(100% - 128px)`,
    '&:hover': {
      overflowY: 'scroll',
    }
  }  
});

const SidebarList = ({ classes, chats }) => (
  <div className={classes.listWrapper}>
    <List>
      {
        chats.map((chat, index) => (
         <SidebarListItem key={index} {...chat}></SidebarListItem>
        ))
      }
    </List>
  </div>
)
export default withStyles(styles)(SidebarList);
