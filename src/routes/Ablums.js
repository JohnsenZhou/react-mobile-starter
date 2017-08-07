import React from 'react';
import { connect } from 'dva';
import Layout from '../components/MainLayout/Layout';

function Ablums() {
  return (
    <Layout>
      <div>skljfskdjfkldsjf</div>
    </Layout>
  );
}

function mapStateToProps(state) {
  const loading = state.loading.models.posts;
  const posts = { ...state.posts, loading };
  return { posts };
}

export default connect(mapStateToProps)(Ablums);
