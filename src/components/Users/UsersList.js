import React, { Component } from 'react';
import { Link } from 'dva/router';
import styles from './users.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetailClass: false,
    };
  }

  render() {
    const { item } = this.props;

    return (
      <li className="list-item clearfix" key={item.id} onClick={() => this.setState({showDetailClass: !this.state.showDetailClass})}>
        <div>
          <span className="list-id">{item.id}</span>
          <span className="list-title">{item.name}</span>
        </div>
        <div className={this.state.showDetailClass ? styles.user_detail : styles.user_detail_hide}>
          <p className={styles.phone}>{item.phone}</p>
          <p className={styles.email}>{item.email}</p>
          <p className={styles.address}>{item.address.city}<Link to={`/users/${item.id}/todos`} className="linkStyle"><span className={styles.read_more}>查看更多</span></Link></p>
        </div>
      </li>
    );
  }
}

export default UsersList;