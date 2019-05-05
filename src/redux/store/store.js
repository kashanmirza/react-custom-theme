import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";

import rootReducers from "../reducers/index";

const middleware = applyMiddleware(thunk,logger);

const store = createStore(rootReducers, middleware);

export default store




