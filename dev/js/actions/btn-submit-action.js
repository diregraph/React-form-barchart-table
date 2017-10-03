const submitForm = (formData) => {
    return {
        type: 'SUBMIT_BUTTON_CLICKED',
        payload: formData
    }
};

export default submitForm;