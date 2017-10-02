const resetForm = (formData) => {
    console.log('clicked reset button');
    return {
        type: 'RESET_BUTTON_CLICKED',
        payload: formData
    }
};


export default resetForm;