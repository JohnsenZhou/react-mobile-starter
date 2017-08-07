import * as jsonService from '../services/jsonholder';

export default {
  namespace: 'posts',
  state: {
    postsList: [],
  },
  reducers: {
    save(state, { payload: { postsList } }) {
      return { ...state, postsList };
    },
  },
  effects: {
    *fetch({ payload: { query } }, { call, put }) {
      const { data } = yield call(jsonService.getPostsList);
      yield put({ type: 'save', payload: { postsList: data.data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};