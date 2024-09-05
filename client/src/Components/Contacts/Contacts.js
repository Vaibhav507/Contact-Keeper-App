import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";



const Contacts = () => {

    const contactsContext = useContext(ContactContext);

    const { contacts } = contactsContext;

    return(
        <Fragment>
            {contacts.map(contact => (
                <ContactItem contact={contact} key={contact.id} />
            ))}
        </Fragment>
    );
};

export default Contacts