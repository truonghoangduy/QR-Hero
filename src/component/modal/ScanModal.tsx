import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner'
import React, { Component, Dispatch, useState } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'
import { Button, Icon, ThemeConsumer } from 'react-native-elements';
import { call } from 'react-native-reanimated';
import { connect } from 'react-redux';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import * as actions from '../../redux/actions/ActionCreator';

interface IProps {
    storeQRCode: (data) => void,
}

class ScanModal extends Component<IProps, {}> {

    constructor(props: any) {
        super(props);
        this.state = {
            scanned: false
        }
    }


    handleBarCodeScanned = (callback: BarCodeEvent) => {
        this.setState({ scanned: true })
        if (callback.data != null) {
            this.props.storeQRCode({ name: callback.data, data: callback.data, id: new Date().toISOString(), note: "" });
        }
        alert(`Bar code with type ${callback.type} and data ${callback.data} has been scanned!`);
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <BarCodeScanner style={[StyleSheet.absoluteFill]} onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}></BarCodeScanner>
                <Button style={{ justifyContent: "flex-end" }} onPress={() => { this.props.onSavePress() }} title="Save"></Button>
            </View >
        )
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    storeQRCode: (data: string) => dispatch(actions.store_qr(data))
});

const mapStateToProps = (state: any) => ({
    copyedText: state.payload
});
export default connect(mapStateToProps, mapDispatchToProps)(ScanModal);


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    container: {
        alignSelf: "center",
        marginTop: height * 0.1171,//80h
        backgroundColor: "#728c8e",
        height: height * 0.73206,//500h
        elevation: 30,
        width: width * 0.876,//360w
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 25,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
