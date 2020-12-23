// export interface State {
//     data: Array<any>;
//     loading: boolean | null;
// }
export interface Action {
    type: string;
    payload: any;
}

export const intialState = {
    data: [],
    loading: false
};

export interface QR_CODE {
    data: string,
    id: string,
    note: string,
    name: string
}

export const intialStateStoreQR = {
    data: [],
    loading: false
};

export interface QR_Detail {
    description: string,
    data: string,
    created_at: string
}
