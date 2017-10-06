import {
    INVALIDATE_ADDRESSBOOK,
    REQUEST_ADRESSBOOK,
    RECEIVE_ADDRESSBOOK
} from '../actions/address-book-loading-action'
import {
    PREVIOUS_BUTTON_CLICKED,
    NEXT_BUTTON_CLICKED
} from '../actions/pagination-action'

export default function addressBook(state = {
                                        isFetching: false,
                                        didInvalidate: false,
                                        items: [],
                                        page: 1,
                                        pagedItems: []
                                    },
                                    action) {
    switch (action.type) {
        case INVALIDATE_ADDRESSBOOK:
            return Object.assign({}, state, {
                didInvalidate: true,
                page: 1,
                pagedItems: []
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
                lastUpdated: action.receivedAt,
                page: 1,
                pagedItems: action.addressBook.slice(0, 10)
            });
        case PREVIOUS_BUTTON_CLICKED:
            if (action.payload !== 1) {
                return Object.assign({}, state, {
                    page: action.payload - 1,
                    pagedItems: state.items.slice(((action.payload - 1) * 10)-10, ((action.payload - 1) * 10))
                });
            } else {
                return Object.assign({}, state, {
                    page: action.payload
                });
            }

        case NEXT_BUTTON_CLICKED:
            if (state.items.length / 10 !== action.payload) {
                return Object.assign({}, state, {
                    page: action.payload + 1,
                    pagedItems: state.items.slice(((action.payload + 1) * 10)-10, ((action.payload + 1) * 10))
                });
            } else {
                return Object.assign({}, state, {
                    page: action.payload
                });
            }
        default:
            return state
    }
}
