import * as jsonService from '../services/jsonholder';

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
    *fetchDetail({ payload: query }, { call, put }) {
      const id = query.albumId;
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
        if (pathname === '/albums') {
          dispatch({ type: 'fetch', payload: query });
        } else if (pathname === '/album-detail') {
          dispatch({ type: 'fetchDetail', payload: query });
        }
      });
    },
  },
};