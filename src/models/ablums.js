import * as jsonService from '../services/jsonholder';

export default {
  namespace: 'ablums',
  state: {
    ablumsList: [],
    showProgress: true,
  },
  reducers: {
    save(state, { payload: { ablumsList, showProgress } }) {
      return { ...state, ablumsList, showProgress };
    },
    resetSpinner(state) {
      return { ...state, showProgress: true };
    },
  },
  effects: {
    *fetch({ payload: { query } }, { call, put }) {
      const { data } = yield call(jsonService.getAlbums);
      if (!data.data) return;
      yield put({ type: 'save', payload: { ablumsList: data.data, showProgress: false } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/albums') {
          dispatch({ type: 'resetSpinner' });
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};