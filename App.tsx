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
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

export default function App() {


  const [CameraHasPermission, setHasPermission] = useState<boolean>(false);
  const [MediaHasPermission, MediaSetHasPermission] = useState<boolean>(false);
  const [FontLoad, setFontLoad] = useState<boolean>(false);
  const [fontState] = useFonts({
    'Bold': require('./src/fonts/Montserrat-ExtraBold.otf'),
    'Medium': require('./src/fonts/Montserrat-Medium.otf'),
    'Regular': require('./src/fonts/Montserrat-Regular.otf'),
  });
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      const mediaStatus = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      MediaSetHasPermission(mediaStatus.status == 'granted')
    })();
  }, []);


  // if (CameraHasPermission && MediaHasPermission) {
  if (!fontState) {
    return (<Text>Loading</Text>);
  } else {
    return (
      <Provider store={store}>
        <Main></Main>
      </Provider>
    );
  }

  // }


}
