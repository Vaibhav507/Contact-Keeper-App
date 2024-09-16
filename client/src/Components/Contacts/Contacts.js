import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";



const Contacts = () => {

    const contactsContext = useContext(ContactContext);

    const { contacts, filtered } = contactsContext;

    if(contacts.length === 0) {
        return( <h4>Please add a COntact</h4> )
    }

    return(
        <Fragment>
            {filtered !== null ?
            filtered.map(contact => (
                <ContactItem contact={contact} key={contact.id} />
            )) :
            contacts.map(contact => (
                <ContactItem contact={contact} key={contact.id} />
            )) 
        }
        </Fragment>
    );
};

export default Contacts