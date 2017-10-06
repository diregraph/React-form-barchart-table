export const PREVIOUS_BUTTON_CLICKED = 'PREVIOUS_BUTTON_CLICKED';

export const previousPage = (currentPage) => {
    return {
        type: PREVIOUS_BUTTON_CLICKED,
        payload: currentPage
    }
};

export const NEXT_BUTTON_CLICKED = 'NEXT_BUTTON_CLICKED';

export const nextPage = (currentPage) => {
    return {
        type: NEXT_BUTTON_CLICKED,
        payload: currentPage
    }
};