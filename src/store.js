import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from './sagas';
import rootReducer from './ducks'
import history from './history';
const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [
  thunk,
  sagaMiddleware,
  routerMiddleware(history)
]

// connect redux dev tools
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  composedEnhancers
)

sagaMiddleware.run(rootSaga);

// store.subscribe( () => {
//   saveState(store.getState());
// });

export default store;