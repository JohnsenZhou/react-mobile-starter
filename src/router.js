import React from 'react';
import { Router } from 'dva/router';

const cached = {};

function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'Posts',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/posts'));
          cb(null, require('./routes/Posts'));
        });
      },
    },
    {
      path: '/albums',
      name: 'Ablums',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/ablums'));
          cb(null, require('./routes/Ablums'));
        });
      },
    },
    {
      path: '/users',
      name: 'Users',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, require('./routes/Users'));
        });
      },
    },
    {
      path: '/users/:userId',
      name: 'user-detail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, require('./routes/UserDetail'));
        });
      },
      childRoutes: [
        {
          path: 'todos',
          name: 'user-todos',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/users'));
              cb(null, require('./routes/UserTodos'));
            });
          },
        },
        {
          path: 'ablums',
          name: 'user-ablums',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/users'));
              cb(null, require('./routes/UserAblums'));
            });
          },
        },
        {
          path: 'posts',
          name: 'user-posts',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/users'));
              cb(null, require('./routes/UserPosts'));
            });
          },
        },
      ],
    },
    {
      path: '/posts/:postId',
      name: 'post-detail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/posts'));
          cb(null, require('./routes/PostDetail'));
        });
      },
    },
    {
      path: '/albums/:albumId',
      name: 'album-detail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/ablums'));
          cb(null, require('./routes/AblumDetail'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
