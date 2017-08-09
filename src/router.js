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
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/posts'));
          cb(null, require('./routes/IndexPage'));
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
      path: '/post-detail',
      name: 'post-detail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/posts'));
          cb(null, require('./routes/PostDetail'));
        });
      },
    },
    {
      path: '/album-detail',
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
