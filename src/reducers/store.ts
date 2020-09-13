import { IRootState, rootReducer } from './index';
// import {
//   enhancer,
//   middleware as reduxLittleRouterMiddleware,
// } from '#/utils/reduxLittleRouter';

import { routerForBrowser } from 'redux-little-router';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

const config = {
  routes: {
    "/*": {},
  },
};

export const { reducer, middleware, enhancer } = routerForBrowser(config);

export function configureStore(initialState?: IRootState) {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    const logger = require('redux-logger').createLogger({
      collapsed: true,
      // diff: true, // commenting for now as its throwing error for router store diff
    });

    middlewares.push(logger);
  }

  const middleware = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    initialState!,
    compose(middleware),
  ) as Store<IRootState>;

  return store;
}

export default configureStore();
