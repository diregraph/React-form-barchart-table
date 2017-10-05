import {
    INVALIDATE_ADDRESSBOOK,
    REQUEST_ADRESSBOOK,
    RECEIVE_ADDRESSBOOK
} from '../actions/address-book-loading-action'

export default function addressBook(state = {
                                        isFetching: false,
                                        didInvalidate: false,
                                        items: []
                                    },
                                    action) {
    switch (action.type) {
        case INVALIDATE_ADDRESSBOOK:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_ADRESSBOOK:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_ADDRESSBOOK:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.addressBook,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}
