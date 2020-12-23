import * as ActionTypes from '../actions/ActionTypes';
import Clipboard from 'expo-clipboard';
import { intialState, intialStateStoreQR, QR_CODE } from '../interface';


export const qr_event = (state = intialState, action: any) => {
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



export const qr_store = (state = intialStateStoreQR, action: any) => {
    switch (action.type) {
        case ActionTypes.STORE_QR:
            return {
                ...state,
                data: state.data.concat(action.payload)
            }

        case ActionTypes.EDIT_QR:
            var newData = [...state.data]
            var qr_id_index = state.data.findIndex((qr) => qr.id == action.payload.id)
            //@ts-ignore
            newData[qr_id_index] = { ...action.payload };
            return {
                ...state,
                data: newData
            }
        default:
            return state;
    }
};