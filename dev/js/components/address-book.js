import React, {Component} from 'react';
import contacts from './contacs';

class AddressBook extends Component {
    getNames(contacts){
        let names = []
        contacts.contacts.map((contact) => {
            names.push(contact.name);
        } );
        return names;
    }
    render() {
        return(
            <div>
                {this.getNames(contacts).map((name)=>{
                    return <p>{name}</p>
                })}

            </div>
        );
    }
}

export default AddressBook;