import * as jsonService from '../services/jsonholder';

export default {
  namespace: 'posts',
  state: {
    postsList: [],
    postDetail: {},
    postComments: [],
    showModal: false,
    showProgress: true,
  },
  reducers: {
    save(state, { payload: { postsList, showProgress } }) {
      return { ...state, postsList, showProgress };
    },
    savePostDetail(state, { payload: { postDetail, postComments, showProgress } }) {
      return { ...state, postDetail, postComments, showProgress };
    },
    editPostDetail(state, { payload: { postDetail } }) {
      return { ...state, postDetail };
    },
    openModal(state) {
      return { ...state, showModal: true };
    },
    hideModal(state) {
      return { ...state, showModal: false };
    },
    resetSpinner(state) {
      return { ...state, showProgress: true };
    },
  },
  effects: {
    *fetch({ payload: query }, { call, put }) {
      const { data } = yield call(jsonService.getPostsList);
      if (!data.data) return;
      yield put({ type: 'save', payload: { postsList: data.data, showProgress: false } });
    },
    *fetchDetail({ payload: query }, { call, put }) {
      const id = query.postId;
      const { data } = yield call(jsonService.getPostDetail, id);
      const commentRes = yield call(jsonService.getPostComment, id);
      if (!data.data) return;
      yield put({
        type: 'savePostDetail',
        payload: {
          postDetail: data.data,
          postComments: commentRes.data.data,
          showProgress: false,
        },
      });
    },
    *fetchComments({ payload: query }, { call, put }) {
      const id = query.postId;
      const { data } = yield call(jsonService.getPostComment, id);
      if (!data.data) return;
      yield put({ type: 'savePostDetail', payload: { postComments: data.data, showProgress: false } });
    },
    *editDetail({ payload: values }, { call, put }) {
      const { data } = yield call(jsonService.updatePostDetail, values);
      if (!data.data) return;
      yield put({
        type: 'editPostDetail',
        payload: {
          postDetail: data.data,
        },
      });
      yield put({
        type: 'hideModal',
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'resetSpinner' });
          dispatch({ type: 'fetch', payload: query });
        } else if (pathname === '/post-detail') {
          dispatch({ type: 'resetSpinner' });
          dispatch({ type: 'fetchDetail', payload: query });
        }
      });
    },
  },
};