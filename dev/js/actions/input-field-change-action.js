const inputFieldChange = (inputFieldData) => {
    return {
        type: 'INPUT_FIELD_CHANGED',
        payload: inputFieldData
    }
};

export default inputFieldChange;
