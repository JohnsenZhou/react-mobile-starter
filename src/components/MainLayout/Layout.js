import React, { Component } from 'react';
import { Link } from 'dva/router';
import { AppBar, Drawer, Toolbar, Typography, Button, IconButton, Divider } from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import PhotoIcon from 'material-ui-icons/Photo';
import PsrsonIcon from 'material-ui-icons/Person';
import styles from './layout.css';

class ButtonAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: '主页',
      openDrawer: false,
    };
  }

  setTitle = (num) => {
    switch(num) {
      case 1:
        this.setState({ appTitle: '主页' });
        break;
      case 2:
        this.setState({ appTitle: '相册' });
        break;
      case 3:
        this.setState({ appTitle: '用户中心' });
        break;
    }
  }

  handleLeftOpen = () => {
    this.setState({
      openDrawer: true,
    });
  }

  handleLeftClose = () => {
    this.setState({
      openDrawer: false,
    });
  }

  render() {

    return (
      <div className={styles.root}>
        <AppBar position="static" className={styles.appBar}>
          <Toolbar>
            <IconButton onClick={this.handleLeftOpen} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={styles.flex}>
              {this.state.appTitle}
            </Typography>
            <IconButton color="contrast" href="https://github.com/JohnsenZhou" aria-label="Add to shopping cart">
              <HomeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.openDrawer}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose}
        >
          <AppBar position="static" className={styles.appBar}>
            <Toolbar>
              <Typography type="title" color="inherit">
                React-Starter
              </Typography>
            </Toolbar>
          </AppBar>
          <List className={styles.list} disablePadding>
            <ListItem button onClick={() => { this.setTitle(1) }}>
              <span className={styles.title}><HomeIcon /><Link to="/">主页</Link></span>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => { this.setTitle(2) }}>
              <span className={styles.title}><PhotoIcon /><Link to="/albums">相册</Link></span>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => { this.setTitle(3) }}>
              <span className={styles.title}><PsrsonIcon /><Link to="/users">用户中心</Link></span>
            </ListItem>
            <Divider />
          </List>
        </Drawer>
        {this.props.children}
      </div>
    );
  }

}

export default ButtonAppBar;