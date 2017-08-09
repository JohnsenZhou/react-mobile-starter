import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import AlbumDetailView from '../components/Albums/AlbumDetailView';

function AblumDetail({ dispatch, location, ablums }) {
  const ablumsDetailProps = {
    albumDetail: ablums.ablumDetail,
  };
  return (
    <Layout location={location}>
      <div className="normal">
        <ul>
          <AlbumDetailView {...ablumsDetailProps} />
        </ul>
      </div>
      { ablums.loading ? <CircularProgress className="my-progress" /> : ''}
    </Layout>
  );
}

function mapStateToProps(state) {
  const loading = state.loading.models.ablums;
  const ablums = { ...state.ablums, loading };
  return { ablums };
}

export default connect(mapStateToProps)(AblumDetail);