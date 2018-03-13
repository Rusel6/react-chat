import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import Search from './Search.js';
import SidebarList from './SidebarList.js';
import NewChatButton from './newChatButton.js';

const drawerWidth = 320;

const styles = theme => ({
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
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 90,
  },
});

const Sidebar = ({classes, chats}) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <Search></Search>
    <Divider />
    <SidebarList chats={chats}></SidebarList>   
    <NewChatButton></NewChatButton>
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
)

export default withStyles(styles)(Sidebar);
