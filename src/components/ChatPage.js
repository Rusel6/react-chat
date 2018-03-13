import React from 'react';
import { withStyles } from 'material-ui/styles';

import { chats, messages } from '../mock-data';

import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader'
import Chat from './Chat'

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

const ChatPage = ({ classes }) => (
  <div className={classes.root}>
    <ChatHeader></ChatHeader>
    <Sidebar chats={chats}></Sidebar>
    <Chat messages={messages}></Chat>
   
  </div>
)

export default withStyles(styles)(ChatPage);
