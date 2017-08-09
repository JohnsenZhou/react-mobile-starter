import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import Tabs, { Tab } from 'material-ui/Tabs';

import EventNote from 'material-ui-icons/EventNote';
import PhotoIcon from 'material-ui-icons/Photo';
import BubbleChart from 'material-ui-icons/BubbleChart';
import styles from './users.css';

class UserDetailTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentWillMount() {
    const pathname = this.props.children.props.route.name;
    switch(pathname) {
      case 'user-todos':
        this.setState({ index: 0 });
        break;
      case 'user-posts':
        this.setState({ index: 1 });
        break;
      case 'user-ablums':
        this.setState({ index: 2 });
        break;
    }
  }

  handleChange = (event, index) => {
    const { dispatch, userId } = this.props;
    this.setState({ index });
    switch(index) {
      case 0:
        dispatch(routerRedux.push(`/users/${userId}/todos`));
        break;
      case 1:
        dispatch(routerRedux.push(`/users/${userId}/posts`));
        break;
      case 2:
        dispatch(routerRedux.push(`/users/${userId}/ablums`));
        break;
    }
  };

  render() {
    return (
      <div className={styles.user_children_box}>
        <Tabs
          index={this.state.index}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab icon={<EventNote />} label="任务" />
          <Tab icon={<BubbleChart />} label="动态" />
          <Tab icon={<PhotoIcon />} label="相册" />
        </Tabs>
        <div className={styles.user_children_item}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default UserDetailTabs;
