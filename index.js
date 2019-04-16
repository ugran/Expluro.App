/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './src/store/configureStore';

const {store,persistor} = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
