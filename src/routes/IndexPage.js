import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import PostsList from '../components/Posts/PostsList';
import styles from './IndexPage.css';

function IndexPage({ location, posts }) {
  const postsListProps = {
    postsList: posts.postsList,
  };
  return (
    <Layout>
      <div className="normal">
        <ul>
          <PostsList {...postsListProps} />
        </ul>
        { posts.showProgress ? <CircularProgress className="my-progress" /> : ''}
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  const posts = { ...state.posts };
  return { posts };
}

export default connect(mapStateToProps)(IndexPage);
