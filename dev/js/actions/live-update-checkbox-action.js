export const liveUpdateCheckboxUncheck = (checked) => {
    //console.log('unchecked');
    return {
        type: 'LIVE_UPDATE_UNCHECKED',
        payload: checked
    }
};

export const liveUpdateCheckboxCheck = (checked) => {
    //console.log('checked');
    return {
        type: 'LIVE_UPDATE_CHECKED',
        payload: checked
    }
};
