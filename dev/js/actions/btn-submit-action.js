export const SUBMIT_BUTTON_CLICKED = 'SUBMIT_BUTTON_CLICKED';
export const submitForm = (formData) => {
    return {
        type: SUBMIT_BUTTON_CLICKED,
        payload: formData

    }
};