import React, { Component, Dispatch, useRef } from 'react'
import { Button, Text, View, StyleSheet, Share } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import QRCode from 'react-native-qrcode-svg';
import { Dimensions } from 'react-native';
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/ActionCreator';
import { QR_CODE } from '../redux/interface';


export const UselessTextInput = (props: any) => {
    return (
        <TextInput
            style={{ fontSize: 13, padding: 15 }}
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
                <Button onPress={() => { onSave() }} title='Save to Ablum'></Button>
            </View>
        </View>
    );

}

function GenerateQR(props: any) {
    const [value, onChangeText] = React.useState('');
    const [qrReady, onQrCall] = React.useState(false);

    function saveToStore() {
        var data: QR_CODE = { data: value, id: new Date().toISOString(), note: '', name: value }
        props.storeQRCode(data)
    }

    return (
        <View
            style={{
                marginTop: 15,
                borderBottomColor: '#000000',
                borderBottomWidth: 1,
            }}>
            <View style={{ backgroundColor: "#e8e8e8", borderRadius: 15 }}>
                <UselessTextInput
                    multiline
                    onChangeText={(text: string) => onChangeText(text)}
                    value={value}
                />
            </View>

            <Button onPress={() => { onQrCall(true) }} title="Make"></Button>
            {qrReady && value != "" ? <Button onPress={() => saveToStore()} title="Save"></Button> : <View />}
            {qrReady && value != "" ? <SaveQRCode value={value}></SaveQRCode> : <View />}


        </View>
    );
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    storeQRCode: (data: QR_CODE) => dispatch(actions.store_qr(data))
});


export default connect(null, mapDispatchToProps)(GenerateQR);

const styles = StyleSheet.create({
    centeredView: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
});
