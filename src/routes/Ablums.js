import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import AlbumsList from '../components/Albums/AlbumsList';

function Ablums({ location, ablums }) {
  const albumsListProps = {
    albumsList: ablums.ablumsList,
  };
  return (
    <Layout {...location}>
      <div className="normal">
        <ul>
          <AlbumsList {...albumsListProps} />
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

export default connect(mapStateToProps)(Ablums);
