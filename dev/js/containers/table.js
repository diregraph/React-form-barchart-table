import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchAddressBookIfNeeded} from "../actions/address-book-loading-action";
import {nextPage, previousPage} from "../actions/pagination-action";


class Table extends Component {

    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchAddressBookIfNeeded('http://address-book-demo.herokuapp.com/api/contacts');
    }

    componentDidUpdate(prevProps) {
        if (this.props.addressBook.items !== prevProps.addressBook.items) {
            this.props.fetchAddressBookIfNeeded('http://address-book-demo.herokuapp.com/api/contacts');
        }
    }

    handlePageChange(event) {
        const target = event.target;
        const name = target.name;

        if (name === 'prev') {
            this.props.previousPage(this.props.addressBook.page);
        } else if (name === 'next') {
            this.props.nextPage(this.props.addressBook.page);
        }
    }

    getNames() {
        let contactsArr = [];
        let pagedItems = this.props.addressBook.pagedItems;
        if (pagedItems !== []) {
            pagedItems.map((contact) => {
                let contactID = contact.id;
                let contactData = contact.contactData;
                contactsArr.push({id: contactID, name: contactData.name, email: contactData.email, company: contactData.company});
            });
        }
        return contactsArr;


    }

    render() {
        return (
            <div>
                <div className="tableComponentContainer">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#" name="prev" onClick={this.handlePageChange}>Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">{this.props.addressBook.page}</a></li>
                            <li className="page-item"><a className="page-link" href="#" name="next" onClick={this.handlePageChange}>Next</a></li>
                        </ul>
                    </nav>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Company</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!this.props.addressBook.isFetching &&
                        this.getNames().map((contact) => {
                            //console.log(this.props.addressBook.page);
                            if(contact.id <= (10*this.props.addressBook.page)){
                                return (
                                    <tr key={contact.id}>
                                        <th scope="row">{contact.id}</th>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.company}</td>
                                    </tr>
                                );
                            }

                        })
                        }
                        </tbody>
                    </table>
                </div>
                <div className="loader-container">
                    {this.props.addressBook.isFetching &&
                    <div className="loader"></div>
                    }
                </div>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAddressBookIfNeeded: fetchAddressBookIfNeeded,
        previousPage: previousPage,
        nextPage: nextPage
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        addressBook: state.addressBook
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Table);
