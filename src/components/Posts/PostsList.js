import React, { Component } from 'react';
import { Link } from 'dva/router';
import styles from './postsList.css';

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { postsList } = this.props;

    return (
      <div>
        {postsList.map((item => {
          return (
            <li className="list-item clearfix" key={item.id}>
              <Link to={`/post/${item.id}`} className="linkStyle">
                <span className="list-id">{item.id}</span>
                <span className="list-title">{item.title}</span>
                <p className="post-body">{item.body}</p>
              </Link>
            </li>
          )
        }))}
      </div>
    )
  }
}

export default PostsList;