import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { CircularProgress } from 'material-ui/Progress';

function UserAblums({ users }) {
  const albumsList = users.userAblums;

  return (
    <div>
      {albumsList.map((item) => {
        return (
          <li className="list-item clearfix user-list-item" key={item.id}>
            <Link to={`/albums/${item.id}`} className="linkStyle">
              <span className="list-id">{item.id}</span>
              <span className="list-title">{item.title}</span>
            </Link>
          </li>
        );
      })}
      { users.loading ? <CircularProgress className="my-progress" /> : ''}
    </div>
  );
}

function mapStateToProps(state) {
  const loading = state.loading.models.users;
  const users = { ...state.users, loading };
  return { users };
}

export default connect(mapStateToProps)(UserAblums);