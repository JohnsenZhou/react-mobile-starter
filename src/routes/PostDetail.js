import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import PostDetailView from '../components/Posts/PostDetailView';

function PostDetail({ dispatch, location, posts }) {
  const postDetailProps = {
    postDetail: posts.postDetail,
    postComments: posts.postComments,
    showModal: posts.showModal,
    onEdit(values) {
      dispatch({
        type: 'posts/editDetail',
        payload: values,
      });
    },
    openModal() {
      dispatch({
        type: 'posts/openModal',
      });
    },
    hideModal() {
      dispatch({
        type: 'posts/hideModal',
      });
    },
  };
  return (
    <Layout {...location}>
      <div className="normal">
        <ul>
          <PostDetailView {...postDetailProps} />
        </ul>
      </div>
      { posts.loading ? <CircularProgress className="my-progress" /> : ''}
    </Layout>
  );
}

function mapStateToProps(state) {
  const loading = state.loading.models.posts;
  const posts = { ...state.posts, loading };
  console.log(posts)
  return { posts };
}

export default connect(mapStateToProps)(PostDetail);