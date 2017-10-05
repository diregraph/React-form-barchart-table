import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchAddressBookIfNeeded} from "../actions/address-book-loading-action";


class Table extends Component {

    componentDidMount() {
        this.props.fetchAddressBookIfNeeded('http://address-book-demo.herokuapp.com/api/contacts');
    }


    getNames() {
        let contactsArr = [];
        let count = 1;
        if (this.props.addressBook.items !== []) {
            this.props.addressBook.items.map((contact) => {
                contactsArr.push({id: count, name: contact.name, email: contact.email, company: contact.company});
                count++;
            });
        }

        return contactsArr;


    }

    render() {
        return (
            <div className="tableComponentContainer">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
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
                    {this.props.addressBook.isFetching &&
                    <tr>
                        <div className="loader"></div>
                    </tr>
                    }
                    {!this.props.addressBook.isFetching &&
                    this.getNames().map((contact) => {
                        return (
                            <tr key={contact.id}>
                                <th scope="row">{contact.id}</th>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.company}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAddressBookIfNeeded: fetchAddressBookIfNeeded
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        addressBook: state.addressBook
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Table);
