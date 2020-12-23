import React, { Component, useRef } from 'react'
import { Button, Text, View, StyleSheet, Share } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import QRCode from 'react-native-qrcode-svg';
import { Dimensions } from 'react-native';
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';

export const UselessTextInput = (props: any) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
        />
    );
}

export const SaveQRCode = (props: any) => {
    const viewShot = useRef(null);
    async function onSave() {
        let imgPath: string = await captureRef(viewShot);
        await MediaLibrary.saveToLibraryAsync(imgPath).then(() => {
            console.log(imgPath);
        });
    }
    return (
        <View style={styles.centeredView}>
            <View style={{ margin: 20 }}>
                <View ref={viewShot}>
                    <QRCode size={Dimensions.get('window').width * 0.3} value={props.value} logoBackgroundColor='transparent'></QRCode>
                </View>
            </View>
            <View style={{ width: "100%" }}>
                <Button onPress={() => { onSave() }} title='Save'></Button>
            </View>
        </View>
    );

}

export function GenerateQR() {
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    const [qrReady, onQrCall] = React.useState(false);
    return (
        <View
            style={{
                borderBottomColor: '#000000',
                borderBottomWidth: 1,
            }}>
            <UselessTextInput
                multiline
                onChangeText={(text: string) => onChangeText(text)}
                value={value}
            />
            <Button onPress={() => { onQrCall(true) }} title="Make"></Button>
            {qrReady && value != "" ? <SaveQRCode value={value}></SaveQRCode> : <View />}

        </View>
    );
}

export default GenerateQR

const styles = StyleSheet.create({
    centeredView: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
});
