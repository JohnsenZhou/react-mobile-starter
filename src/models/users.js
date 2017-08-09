import * as jsonService from '../services/jsonholder';
import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'users',
  state: {
    usersList: [],
    userTodos: [],
    userPosts: [],
    userAblums: [],
    userDetail: {},
    showProgress: true,
  },
  reducers: {
    save(state, { payload: { usersList, showProgress } }) {
      return { ...state, usersList, showProgress };
    },
    saveUserDetail(state, { payload: { userDetail } }) {
      return { ...state, userDetail };
    },
    saveUserTodos(state, { payload: { userTodos } }) {
      return { ...state, userTodos };
    },
    saveUserPosts(state, { payload: { userPosts } }) {
      return { ...state, userPosts };
    },
    saveUserAblums(state, { payload: { userAblums } }) {
      return { ...state, userAblums };
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
    *fetchUserDetail({ payload: userId }, { call, put }) {
      const { data } = yield call(jsonService.getUserDetail, userId);
      if (!data.data) return;
      yield put({ type: 'saveUserDetail', payload: { userDetail: data.data } });
    },
    *fetchUserTodos({ payload: userId }, { call, put }) {
      const { data } = yield call(jsonService.getUserTodoList, userId);
      if (!data.data) return;
      yield put({ type: 'saveUserTodos', payload: { userTodos: data.data } });
    },
    *fetchUserPosts({ payload: userId }, { call, put }) {
      const { data } = yield call(jsonService.getUserPostList, userId);
      if (!data.data) return;
      yield put({ type: 'saveUserPosts', payload: { userPosts: data.data } });
    },
    *fetchUserAblums({ payload: userId }, { call, put }) {
      const { data } = yield call(jsonService.getUserAlbumsList, userId);
      if (!data.data) return;
      yield put({ type: 'saveUserAblums', payload: { userAblums: data.data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        const match = pathToRegexp('/users/:userId/*').exec(pathname);
        console.log(match);
        if (match) {
          const userId = match[1];
          dispatch({ type: 'fetchUserDetail', payload: userId });
          switch (match[2]) {
            case 'todos':
              dispatch({ type: 'fetchUserTodos', payload: userId });
              break;
            case 'ablums':
              dispatch({ type: 'fetchUserAblums', payload: userId });
              break;
            case 'posts':
              dispatch({ type: 'fetchUserPosts', payload: userId });
              break;
          }
        }
        if (pathname === '/users') {
          dispatch({ type: 'resetSpinner' });
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};