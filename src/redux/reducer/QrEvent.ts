import * as ActionTypes from '../actions/ActionTypes';
import Clipboard from 'expo-clipboard';
import { intialState, State } from '../interface';


export const qr_event = (state: State = intialState, action: any) => {
    switch (action.type) {
        case ActionTypes.OPEN_QR:
            return {
                ...state,
                data: action.payload
            }
        case ActionTypes.CLOSE_QR:
            return {
                ...state,
                data: action.payload
            }

        case ActionTypes.SCANNED:
            return {
                ...state,
                data: action.payload
            }
        case ActionTypes.COPY_TO_CLIP_BOARD:
            Clipboard.setString(action.payload)
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
};