export const SHOW_ALERT = 'SHOW_ALERT';
export const DISSMISS_ALERT = 'DISSMISS_ALERT';

export const alertShow = () => {
    return {
        type: SHOW_ALERT,
        payload: true
    }
};

export const alertDissmiss = (alertVisibility) => {
    return {
        type: DISSMISS_ALERT,
        payload: false
    }
};
