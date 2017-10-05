export const INPUT_FIELD_CHANGED = 'INPUT_FIELD_CHANGED';

export const inputFieldChange = (inputFieldData) => {
    return {
        type: INPUT_FIELD_CHANGED,
        payload: inputFieldData
    }
};