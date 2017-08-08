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
    <Layout {...location}>
      <div className="normal">
        <ul>
          <PostsList {...postsListProps} />
        </ul>
        { posts.loading ? <CircularProgress className="my-progress" /> : ''}
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  const loading = state.loading.models.posts;
  const posts = { ...state.posts, loading };
  return { posts };
}

export default connect(mapStateToProps)(IndexPage);
