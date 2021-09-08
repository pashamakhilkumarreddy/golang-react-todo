import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import config from "../config";

const middleware = [thunk];

const { ENV } = config;

const persistConfig = {
  key: "root",
  storage,
  // blacklist: [],
  // whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (config.ENV !== "production") {
  const logger = createLogger();
  middleware.push(logger);
}

const composeEnhancer =
  ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composeEnhancer);

const persistor = persistStore(store);

export { store, persistor };
