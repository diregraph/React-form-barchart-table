import fetch from 'isomorphic-fetch';

export const REQUEST_ADRESSBOOK = 'REQUEST_ADRESSBOOK';

function requestAddressBook() {
    return {
        type: REQUEST_ADRESSBOOK
    }
}

export const RECEIVE_ADDRESSBOOK = 'RECEIVE_ADDRESSBOOK';

function receiveAddressBook(json) {
    let jsonDataArr = [];
    let count = 1;
    for (let i = 0; i < json.contacts.length; i++) {
        jsonDataArr.push({id:count,contactData:json.contacts[i]});
        count++;
    }
    return {
        type: RECEIVE_ADDRESSBOOK,
        addressBook: jsonDataArr,
        receivedAt: Date.now()
    }
}

export const INVALIDATE_ADDRESSBOOK = 'INVALIDATE_ADDRESSBOOK';

export function invalidateAddressbook() {
    return {
        type: INVALIDATE_ADDRESSBOOK
    }
}


function fetchAddressBook(url) {
    return dispatch => {
        dispatch(requestAddressBook());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveAddressBook(json)))
            .catch(error => console.log(error) )
    }
}

function shouldFetchAddressBook(state) {
    const addressBook = state.addressBook;
    const addressBookItems = addressBook.items;
    if (!addressBookItems.length) {
        return true
    } else if (addressBook.isFetching) {
        return false
    } else {
        return addressBook.didInvalidate
    }
}

export function fetchAddressBookIfNeeded(url) {

    return (dispatch, getState) => {

        if (shouldFetchAddressBook(getState())) {
            return dispatch(fetchAddressBook(url))
        } else {
            return Promise.resolve()
        }
    }
}