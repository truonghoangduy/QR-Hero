import * as ActionTypes from './ActionTypes';

export const open_qr = {
    type: ActionTypes.OPEN_QR,
    payload: true
}

export const close_qr = {
    type: ActionTypes.CLOSE_QR,
    payload: false
}

export const store_qr = (data: any) => ({
    type: ActionTypes.STORE_QR,
    payload: data
})


export const edit_qr = (data: any) => ({
    type: ActionTypes.EDIT_QR,
    payload: data
})

export const copy_to_clip_board = (data: string) => ({
    type: ActionTypes.COPY_TO_CLIP_BOARD,
    payload: data
});