const submitForm = (formData) => {
    console.log('clicked submit button');
    return {
        type: 'SUBMIT_BUTTON_CLICKED',
        payload: formData
    }
};

export default submitForm;