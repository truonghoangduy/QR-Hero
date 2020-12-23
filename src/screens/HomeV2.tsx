import React, { Component, Dispatch } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Modal
} from 'react-native';
const LottieView = require("lottie-react-native");
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import Posts from './Post';
import { Icon } from 'react-native-elements';
import ScanModal from '../component/modal/ScanModal';
import { connect } from 'react-redux';
import Home from './Home';
import * as actions from '../redux/actions/ActionCreator';
import * as action_types from '../redux/actions/ActionTypes';
import { QR_CODE } from '../redux/interface';

interface IProps {
    listOfQR: []
}



class HomeV2 extends Component<IProps, {}> {
    state = {
        popularSelected: true,
        openQR: false
    }
    onTabPressed = () => {
        this.setState({ popularSelected: !this.state.popularSelected })
    }

    onQRPressed = () => {
        this.setState({ openQR: !this.state.openQR })
    }

    renderPost(item: any) {
        return (
            <View style={{
                flexDirection: "row"
            }}>


                <Posts
                    style={{ backgroundColor: "#ffffff" }}
                    onPress={() => this.props.navigation.navigate('Detail', { qrID: item.id })}
                    name={item.name}
                    profile={require('../images/img4.png')}
                    // photo={require('../images/hs.jpg')}
                    date={item.id}
                />

                {/* <View style={{
                    height: 160,
                    backgroundColor: "#3c636c",
                    width: 20,
                    marginLeft: 20,
                    marginTop: 120,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20
                }}>

                </View> */}

            </View>
        );
    }



    render() {
        const qr_data = this.props.listOfQR;
        console.log(qr_data)
        const data = require('../../assets/QR1.json');
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    height: "100%",
                    backgroundColor: "#044244"
                }}
            >
                <View style={{
                    height: 260,
                    width: "100%",
                    paddingHorizontal: 35
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        paddingTop: 40,
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: "50%"
                        }}>
                            <Image source={require('../images/Untitled.png')}
                                style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{
                            width: "50%",
                            alignItems: "flex-end",
                        }}>
                            <Icon name="dots-two-vertical"
                                size={22}
                                color="#d2d2d2"
                                style={{
                                    marginRight: -7,
                                    marginTop: 7
                                }} />
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        flex: 1,
                        width: 300,
                        alignItems: 'center',
                        alignSelf: 'center',

                    }} onPress={() => { this.onQRPressed() }}>
                        <LottieView
                            style={{

                                alignSelf: 'center',
                            }}

                            source={data}
                            autoPlay
                            loop={true}
                            // speed={0.5}
                            onAnimationFinish={() => {
                                console.log('Animation Finished!');


                            }}
                        />
                        <View style={{
                            backgroundColor: '#3c636c',
                            width: 130,
                            marginVertical: 30,
                            borderColor: '#fff',
                            borderBottomEndRadius: 20,

                            borderWidth: 3,
                            flex: 1,
                            borderTopStartRadius: 20,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 45,
                                fontWeight: 'bold',
                                color: '#fff'
                            }}>
                                QR
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Modal
                        // animationType="fade"
                        // transparent={true}
                        visible={this.state.openQR}>
                        <ScanModal onSavePress={() => {
                            this.setState({ openQR: false })
                        }} navigation={this.props.navigation}></ScanModal>
                    </Modal>
                </View>

                <View style={{
                    backgroundColor: "#FFF",
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    height: '100%',
                    paddingHorizontal: 35
                }}>
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={this.onTabPressed}
                            style={{
                                borderBottomColor: this.state.popularSelected ? "#044244" : "#FFF",
                                borderBottomWidth: 4,
                                paddingVertical: 6
                            }}
                        >
                            <Text style={{
                                fontFamily: "Bold",
                                color: this.state.popularSelected ? "#044244" : "#9ca1a2"
                            }}>MOST POPULAR</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={this.onTabPressed}
                            style={{
                                borderBottomColor: this.state.popularSelected ? "#FFF" : "#044244",
                                borderBottomWidth: 4,
                                paddingVertical: 6,
                                marginLeft: 30
                            }}
                        >
                            <Text style={{
                                fontFamily: "Bold",
                                color: this.state.popularSelected ? "#9ca1a2" : "#044244"
                            }}>RECENT</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <View>
                        <FlatList
                            data={qr_data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => <Posts>
                                style={{ backgroundColor: "#ffffff" }}
                                onPress={() => this.props.navigation.navigate('Detail')}
                                name={item.data}
                                profile={require('../images/img4.png')}
                                photo={require('../images/hs.jpg')}
                                date="20/12/2020"
                            </Posts>}
                        />
                    </View> */}
                    {/* Render Recent */}
                    {/* <View style={{
                        flexDirection: "row"
                    }}>


                        <Posts
                            style={{ backgroundColor: "#ffffff" }}
                            onPress={() => this.props.navigation.navigate('Detail')}
                            name={this.props.listOfQR[0]}
                            profile={require('../images/img4.png')}
                            photo={require('../images/hs.jpg')}
                            date="20/12/2020"
                        />

                        <View style={{
                            height: 160,
                            backgroundColor: "#3c636c",
                            width: 20,
                            marginLeft: 20,
                            marginTop: 120,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20
                        }}>

                        </View>

                    </View>
 */}
                    <View>
                        <FlatList
                            data={qr_data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => this.renderPost(item)}
                        />
                    </View>


                    <View style={{
                        flexDirection: "row"
                    }}>

                        <View style={{
                            height: 160,
                            backgroundColor: "#3c636c",
                            width: 20,
                            marginLeft: -40,
                            marginRight: 20,
                            marginTop: 120,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20
                        }}>

                        </View>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    copyToClipBoard: (data: string) => dispatch(actions.copy_to_clip_board(data))
});


const mapStateToProps = (state: any) => ({
    copyedText: state.payload,
    listOfQR: state.qr_store.data

});
export default connect(mapStateToProps, mapDispatchToProps)(HomeV2);