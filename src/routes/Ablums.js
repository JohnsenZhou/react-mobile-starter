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
      { ablums.showProgress ? <CircularProgress className="my-progress" /> : ''}
    </Layout>
  );
}

function mapStateToProps(state) {
  const ablums = { ...state.ablums };
  return { ablums };
}

export default connect(mapStateToProps)(Ablums);
