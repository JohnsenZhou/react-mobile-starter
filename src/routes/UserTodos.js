import React, { Component } from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import UserTodosItem from '../components/Users/UserTodosItem';
import styles from './userDetail.css';

class UserTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getTrueOrFalseImg = (item) => {
    const imgUrl = item.completed ? require('../assets/img/user/true.png') : require('../assets/img/user/false.png');
    return imgUrl;
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <ul>
          {users.userTodos.map((item) => {
            return (
              <UserTodosItem item={item} key={item.id} />
            );
          })}
        </ul>
        { users.loading ? <CircularProgress className="my-progress" /> : ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const loading = state.loading.models.users;
  const users = { ...state.users, loading };
  return { users };
}

export default connect(mapStateToProps)(UserTodos);