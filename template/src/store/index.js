import { createStore , applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from "../reducers/index";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['']
  };

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persistedReducer,
    storeEnhancers(
      applyMiddleware(thunk,
        )
    ));
  export const persistor = persistStore(store);