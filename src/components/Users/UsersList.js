import React, { Component } from 'react';
import { Link } from 'dva/router';
import styles from './users.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { usersList } = this.props;

    return (
      <div>
        {usersList.map((item) => {
          return (
            <li className="list-item clearfix" key={item.id}>
              <Link to={`/users/${item.id}/todos`} className="linkStyle">
                <div>
                  <span className="list-id">{item.id}</span>
                  <span className="list-title">{item.name}</span>
                </div>
                <div className={styles.user_detail}>
                  <p className={styles.phone}>{item.phone}</p>
                  <p className={styles.email}>{item.email}</p>
                  <p className={styles.address}>{item.address.city}<span className={styles.read_more}>查看更多</span></p>
                </div>
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
}

export default UsersList;