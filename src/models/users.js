import * as jsonService from '../services/jsonholder';

export default {
  namespace: 'users',
  state: {
    usersList: [],
    showProgress: true,
  },
  reducers: {
    save(state, { payload: { usersList, showProgress } }) {
      return { ...state, usersList, showProgress };
    },
    resetSpinner(state) {
      return { ...state, showProgress: true };
    },
  },
  effects: {
    *fetch({ payload: { query } }, { call, put }) {
      const { data } = yield call(jsonService.getUsers);
      if (!data.data) return;
      yield put({ type: 'save', payload: { usersList: data.data, showProgress: false } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'resetSpinner' });
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};