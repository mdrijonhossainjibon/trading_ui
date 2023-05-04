import { createStore ,applyMiddleware} from "redux";
import { rootReducer } from "./modules";
//import createSagaMiddleware from 'redux-saga';
//import rootSaga from './sagas';
//const sagaMiddleware = createSagaMiddleware();
export const Store = createStore(
  rootReducer,//applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//sagaMiddleware.run(rootSaga);
