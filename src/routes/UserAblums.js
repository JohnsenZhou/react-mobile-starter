import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import PostDetailView from '../components/Posts/PostDetailView';

function UserAblums({ dispatch, location, users, children }) {
  const userTodosProps = {

  };
  return (
    <div className="normal">
      i'm albums
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