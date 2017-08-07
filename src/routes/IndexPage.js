import React from 'react';
import { connect } from 'dva';
import Layout from '../components/MainLayout/Layout';
import PostsList from '../components/PostsList/PostsList';
import styles from './IndexPage.css';

function IndexPage({ location, posts }) {
  const postsListProps = {
    postsList: posts.postsList,
  }
  console.log(posts)
  console.log(postsListProps)
  return (
    <Layout>
      <div>
        <ul>
          <PostsList {...postsListProps} />
        </ul>
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
