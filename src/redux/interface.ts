export interface State {
    data: string | boolean | null;
    loading: boolean | null;
}
export interface Action {
    type: string;
    payload: any;
}

export const intialState = {
    data: null,
    loading: false
};

export interface QR_Detail {
    description: string,
    data: string,
    created_at: string
}
