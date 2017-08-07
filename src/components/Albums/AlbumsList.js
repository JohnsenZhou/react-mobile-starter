import React, { Component } from 'react';
import { Link } from 'dva/router';
// import styles from './postsList.css';

class AlbumsList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { albumsList } = this.props;

    return (
      <div>
        {albumsList.map((item => {
          return (
            <li className="list-item clearfix" key={item.id}>
              <Link to={`/albums/${item.id}`} className="linkStyle">
                <span className="list-id">{item.id}</span>
                <span className="list-title">{item.title}</span>
              </Link>
            </li>
          )
        }))}
      </div>
    )
  }
}

export default AlbumsList;