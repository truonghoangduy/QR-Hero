import React, { Dispatch } from 'react'
import {
    View, Text, TouchableHighlight, StyleSheet,
    Dimensions, TouchableOpacity, ScrollView,
    TextInput,
} from 'react-native';
import { connect } from 'react-redux';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import * as actions from '../redux/actions/ActionCreator';
import { QR_CODE } from '../redux/interface';
import { UselessTextInput } from './GenerateQR';

interface IProps {
    listOfQR: Array<QR_CODE>,
    qrID: string,
    editQR: (qr: QR_CODE) => void
}

interface IState {
    dataURL: string,
    noteText: string,
    name: string,
}
class ModalEdit extends React.Component<IProps, IState> {



    constructor(props: any) {
        super(props);
        this.state = {
            noteText: this.getQRData(this.props.qrID)?.note,
            dataURL: this.getQRData(this.props.qrID)?.data,
            name: this.getQRData(this.props.qrID)?.name,
        }
    }
    getQRData(qid: string) {
        return this.props.listOfQR.find(item => item.id == qid);
    }

    onURLChangeText(text: string) {
        this.setState({
            dataURL: text,
        })
    }


    onNameChangeText(text: string) {
        this.setState({
            name: text,
        })
    }

    onNoteChangeText(text: string) {
        this.setState({
            noteText: text,
        })
    }




    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View>
                    <Text style={{
                        textAlign: 'left',
                        color: '#fff',
                        fontWeight: 'bold', fontSize: 35,
                        paddingBottom: height * 0.0439,//30h
                    }}>
                        Edit QR
                        </Text>
                </View>
                <ScrollView style={{ width: '100%', height: '80%' }}>
                    <View>
                        <Text style={styles.tittleText}>Name</Text>
                        <View style={{ backgroundColor: 'white', height: 40, borderRadius: 5 }}>
                            <UselessTextInput
                                multiline
                                onChangeText={(text: string) => this.onNameChangeText(text)}
                                value={this.state.name}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.tittleText}>Edit URL</Text>
                        <View style={{ backgroundColor: 'white', height: 40, borderRadius: 5 }}>
                            <UselessTextInput
                                multiline
                                onChangeText={(text: string) => this.onURLChangeText(text)}
                                value={this.state.dataURL}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.tittleText}>NOTE</Text>
                        <View style={{ backgroundColor: 'white', height: 40, borderRadius: 5 }}>
                            <UselessTextInput
                                multiline
                                onChangeText={(text: string) => this.onURLChangeText(text)}
                                value={this.state.noteText}
                            />
                        </View>

                    </View>

                    {/* <Text style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingBottom: 10,
                        fontSize: width * 0.0486//20w
                    }}>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}

                        />


                    </Text> */}

                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingTop: 10,
                }}>
                    <TouchableHighlight
                        onPress={this.props.onPress}
                        underlayColor="#fff"
                        style={{
                            width: width * 0.3,//200w
                            elevation: 2,
                            backgroundColor: "#fff",
                            paddingVertical: 13,
                            borderRadius: 25,

                        }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#044244",
                            textAlign: "center",
                            fontSize: 20
                        }}>
                            Cancel
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.editQR({
                                id: this.props.qrID,
                                name: this.state.name,
                                note: this.state.noteText,
                                data: this.state.dataURL
                            })
                        }}
                        underlayColor="#fff"
                        style={{
                            width: width * 0.3,//200w
                            elevation: 2,
                            backgroundColor: "#fff",
                            paddingVertical: 13,
                            borderRadius: 25,

                        }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#044244",
                            textAlign: "center",
                            fontSize: 20
                        }}>
                            Save
                            </Text>
                    </TouchableHighlight>
                </View>

            </View>

        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    editQR: (data: QR_CODE) => dispatch(actions.edit_qr(data))
});


const mapStateToProps = (state: any) => ({
    copyedText: state.payload,
    listOfQR: state.qr_store.data

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginTop: height * 0.1171,//80h
        backgroundColor: "#728c8e",
        height: height * 0.73206,//500h
        elevation: 30,
        width: width * 0.876,//360w
        borderRadius: 20,
        flexDirection: "column",
        justifyContent: 'space-between',
        padding: 25,
    },

    tittleText: {
        fontFamily: "Bold",
        color: 'white',
        marginBottom: 10
    }

})