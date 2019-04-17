import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-community/async-storage';

import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
};