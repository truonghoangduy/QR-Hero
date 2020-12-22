import React, { Component, Dispatch } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';

import * as actions from '../redux/actions/ActionCreator';
import * as action_types from '../redux/actions/ActionTypes';

interface IProps {
    copyToClipBoard: (data: string) => void,
    copyedText: string
}

interface IState {
    copyedText: string
}

class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.centeredView}>
                    <View style={styles.container}>
                        <Button title="@@" onPress={() => {
                            this.props.copyToClipBoard("Con cac213456789");
                        }}></Button>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    centeredView: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'red'

    },
    container: {
        width: '25%',
        height: '50%',
        backgroundColor: 'red'
    },
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    copyToClipBoard: (data: string) => dispatch(actions.copy_to_clip_board(data))
});


const mapStateToProps = (state: any) => ({
    copyedText: state.payload
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
