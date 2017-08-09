import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import UserDetailTabs from '../components/Users/UserDetailTabs';
import styles from './userDetail.css';

function UserDetail({ dispatch, location, users, children }) {
  const userDetailProps = {

  };
  const userInfo = users.userDetail;
  return (
    <Layout location={location}>
      <div className="normal">
        {
        userInfo.address ? 
          <div>
            <div className={styles.user_datail_item}>
              <img src={require(`../assets/img/user/emoji-${Math.ceil((Math.random() * 12))}.png`)} alt="" />
              <span className={styles.user_detail_name}>{userInfo.name}</span>
              <p>{userInfo.address.suite} - {userInfo.address.street} - {userInfo.address.city}</p>
              <p>{userInfo.phone}</p>
              <p>{userInfo.email}</p>
              <p><a href={`http://${userInfo.website}`}>{userInfo.website}</a></p>
            </div>
            <UserDetailTabs dispatch={dispatch} userId={userInfo.id}>
              {children}
            </UserDetailTabs>
          </div>
        : ''
        }
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

export default connect(mapStateToProps)(UserDetail);
