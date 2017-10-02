export const liveUpdateCheckboxUncheck = (checked) => {
    return {
        type: 'LIVE_UPDATE_UNCHECKED',
        payload: checked
    }
};

export const liveUpdateCheckboxCheck = (checked) => {
    return {
        type: 'LIVE_UPDATE_CHECKED',
        payload: checked
    }
};
