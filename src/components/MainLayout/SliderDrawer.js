import React, { Component } from 'react';
import { Drawer, AppBar, Toolbar, Typography, Divider } from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import styles from './layout.css';

class SiderDrawer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {

    };
  }

  render() {
    return (
      <Drawer
        {...this.props}
      >
        <AppBar position="static" className={styles.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit">
              {/* {this.state.appTitle} */}
            </Typography>
          </Toolbar>
        </AppBar>
        <List className={styles.list} disablePadding>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send mail" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    )
  }
}

export default SiderDrawer;
