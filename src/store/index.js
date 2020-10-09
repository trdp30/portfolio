import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

function configureStore() {
  const middlewares = [sagaMiddleware];

  const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);
  return store;
}
export default configureStore();
