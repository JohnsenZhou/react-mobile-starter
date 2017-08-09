import * as jsonService from '../services/jsonholder';
import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'ablums',
  state: {
    ablumsList: [],
    ablumDetail: [],
  },
  reducers: {
    save(state, { payload: { ablumsList } }) {
      return { ...state, ablumsList };
    },
    saveAlbumDetail(state, { payload: { ablumDetail } }) {
      return { ...state, ablumDetail };
    },
  },
  effects: {
    *fetch({ payload: { query } }, { call, put }) {
      const { data } = yield call(jsonService.getAlbums);
      if (!data.data) return;
      yield put({ type: 'save', payload: { ablumsList: data.data } });
    },
    *fetchDetail({ payload: albumId }, { call, put }) {
      const id = albumId;
      const { data } = yield call(jsonService.getAlbumDetail, id);
      if (!data.data) return;
      yield put({
        type: 'saveAlbumDetail',
        payload: {
          ablumDetail: data.data,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        const match = pathToRegexp('/albums/:albumId').exec(pathname);
        if (match) {
          const albumId = match[1];
          dispatch({ type: 'resetSpinner' });
          dispatch({ type: 'fetchDetail', payload: albumId });
        }
        if (pathname === '/albums') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};