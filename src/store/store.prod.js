import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import load/save localstorage 
import { loadState, saveState } from './../libs/persist-state';

// import Reducers
import reducers from './../reducers';

// Import Sagas
import rootSagas from './../sagas';

// Load State from local storage
const persistedState = loadState();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Compose Middleware
const enhancers = compose(
  applyMiddleware(
    sagaMiddleware,
  ),
);

// Create Store
const store = createStore(
  reducers,
  persistedState,
  enhancers,
);

// Run sagas
sagaMiddleware.run(rootSagas);

// Store Subscrive
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
