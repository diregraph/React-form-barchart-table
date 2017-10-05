import React, {Component} from 'react';
import contacts from '../components/contacs';

class Table extends Component {

    addressBookLoad(url) {
        return new Promise((resolve, reject) => {
            const xhttpr = new XMLHttpRequest();
            xhttpr.open("GET", url, true);
            xhttpr.onload = function () {
                if (xhttpr.status === 200 && xhttpr.readyState) {
                    resolve(xhttpr.responseText);
                } else {
                    reject(Error('JSON didn\'t load successfully; error code:' + xhttpr.statusText));
                }
            };

            xhttpr.onerror = function () {
                reject(Error('There was a network error.'));
            };
            xhttpr.send();
        })

    }


    getNames(contacts) {
        let constactsJSON = this.addressBookLoad("http://address-book-demo.herokuapp.com/api/contacts").then(JSON.parse).catch(
            (error) => {
                console.log(error);
            }
        );

        let contactsArr = [];
        let count = 1;
        contacts.contacts.map((contact) => {
            contactsArr.push({id: count, name: contact.name, email: contact.email, company: contact.company});
            count++;
        });
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
                    {this.getNames(contacts).map((contact) => {
                        return (
                            <tr key={contact.id}>
                                <th scope="row">{contact.id}</th>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.company}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Table;
