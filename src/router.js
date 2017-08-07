import React from 'react';
import { Router } from 'dva/router';
import Ablums from './routes/Ablums';

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
      component: Ablums,
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
