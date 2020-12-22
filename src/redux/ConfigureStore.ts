// redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// redux-persist
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const config = { key: 'root', storage: AsyncStorage, debug: true };


import { qr_event } from './reducer/QrEvent'


// export const ConfigureStore = () => {
//     const store = createStore(
//         persistCombineReducers(config, { qr_event }),
//         applyMiddleware(thunk, logger)
//     );
//     const persistor = persistStore(store);
//     return { persistor, store };
// };


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ qr_event }),
        applyMiddleware(thunk, logger)
    );
    // const persistor = persistStore(store);
    return { store };
};