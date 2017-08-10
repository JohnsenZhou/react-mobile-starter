import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import styles from './users.css';

class UserTodosItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.item.completed,
      imgUrl: this.props.item.completed ? require('../../assets/img/user/true.png') : require('../../assets/img/user/false.png'),
    };
  }

  getTrueOrFalseImg = () => {
    const imgUrl = this.state.checked ? require('../../assets/img/user/true.png') : require('../../assets/img/user/false.png');
    this.setState({ imgUrl });
  }

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked,
    });
    this.getTrueOrFalseImg();
  }

  render() {
    const { item } = this.props;
    return (
      <li className={styles.user_todo_list}>
        <div className={styles.user_todo_item}>
          <div className={styles.todo_title}>
            <Checkbox
              checked={this.state.checked}
              value="completed"
              onClick={() => this.handleCheck()}
            />
            <span className={styles.todo_title_content}>{item.title}</span>
          </div>
          <div className={styles.todo_finish}>
            <img src={this.state.imgUrl} alt="" />
          </div>
        </div>
      </li>
    );
  }
}

export default UserTodosItem;