// redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// redux-persist
import { persistStore, persistCombineReducers } from 'redux-persist';

import { qr_event, qr_store } from './reducer/QrEvent';
import AsyncStorage from '@react-native-community/async-storage';

const config = { key: 'root', storage: AsyncStorage, debug: true };




// export const ConfigureStore = () => {
//     const store = createStore(
//         persistCombineReducers(config, { qr_event,qr_store }),
//         applyMiddleware(thunk, logger)
//     );
//     const persistor = persistStore(store);
//     return { persistor, store };
// };


export const ConfigureStore = () => {
    const store = createStore(
        //@ts-ignore
        persistCombineReducers(config, { qr_event, qr_store }),
        // combineReducers({ qr_event, qr_store }),
        applyMiddleware(thunk, logger)
    );
    // const persistor = persistStore(store);
    return { store };
};