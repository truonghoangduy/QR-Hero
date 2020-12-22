import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';

import { ConfigureStore } from './src/redux/ConfigureStore';
import { PersistGate } from 'redux-persist/es/integration/react';

// const { persistor, store } = ConfigureStore();
const { store } = ConfigureStore();

import { Main } from './src/routes/MainRoue'
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as MediaLibrary from 'expo-media-library';
export default function App() {

  const [CameraHasPermission, setHasPermission] = useState<boolean>(false);
  const [MediaHasPermission, MediaSetHasPermission] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      const mediaStatus = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      MediaSetHasPermission(mediaStatus.status == 'granted')
    })();
  }, []);

  // return (
  //   <Provider store={store}>
  //     <PersistGate persistor={persistor}>
  //       <Main></Main>
  //     </PersistGate>
  //   </Provider>
  // );

  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}
