import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import PostDetailView from '../components/Posts/PostDetailView';

function UserDetail({ dispatch, location, users, children }) {
  const userDetailProps = {

  };
  return (
    <Layout {...location}>
      <div className="normal">
        jsdlfjlks
      </div>
      { users.loading ? <CircularProgress className="my-progress" /> : ''}
      {children}
    </Layout>
  );
}

function mapStateToProps(state) {
  const loading = state.loading.models.users;
  const users = { ...state.users, loading };
  return { users };
}

export default connect(mapStateToProps)(UserDetail);