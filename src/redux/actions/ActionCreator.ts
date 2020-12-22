import * as ActionTypes from './ActionTypes';

export const open_qr = {
    type: ActionTypes.OPEN_QR,
    payload: true
}

export const close_qr = {
    type: ActionTypes.CLOSE_QR,
    payload: false
}

export const scanned_qr = (data: string) => ({
    type: ActionTypes.SCANNED,
    payload: data
})

export const copy_to_clip_board = (data: string) => ({
    type: ActionTypes.COPY_TO_CLIP_BOARD,
    payload: data
});