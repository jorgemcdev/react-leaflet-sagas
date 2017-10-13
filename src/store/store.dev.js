/* eslint no-undef: 0 */
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// import load/save localstorage 
import { loadState, saveState } from './../libs/persist-state';

// import Reducers
import reducers from './../reducers';

// Import Sagas
import rootSagas from './../sagas';

// Load State from local storage
const persistedState = loadState();

// Create logger middleware
const loggerMiddleware = createLogger();

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Compose Middleware
const enhancers = compose(
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

// Create Store
const store = createStore(
  reducers,
  persistedState,
  enhancers,
);

// Run Sagas
sagaMiddleware.run(rootSagas);

// Store Subscrive
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

