import React, { Component } from 'react';
import { Link } from 'dva/router';
// import styles from './postsList.css';

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
        {usersList.map((item => {
          return (
            <li className="list-item clearfix" key={item.id}>
              <Link to={`/users/${item.id}`} className="linkStyle">
                <span className="list-id">{item.id}</span>
                <span className="list-title">{item.name}</span>
              </Link>
            </li>
          )
        }))}
      </div>
    )
  }
}

export default UsersList;