import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import UsersList from '../components/Users/UsersList';

function Users({ location, users }) {
  const { usersList } = users;
  return (
    <Layout location={location}>
      <div className="normal">
        <ul>
          {usersList.map((item) => {
            return (
              <UsersList item={item} key={item.id} />
            );
          })}
        </ul>
      </div>
      { users.loading ? <CircularProgress className="my-progress" /> : ''}
    </Layout>
  );
}

function mapStateToProps(state) {
  const loading = state.loading.models.users;
  const users = { ...state.users, loading };
  return { users };
}

export default connect(mapStateToProps)(Users);