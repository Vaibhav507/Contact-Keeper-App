import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";



const Contacts = () => {

    const contactsContext = useContext(ContactContext);

    const { contacts, filtered, getContacts } = contactsContext;

    useEffect(()=> {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if( contacts !== null && contacts.length === 0 ) {
        return( <h4 className="my-3">Please add a Contact</h4> )
    }

    return(
        <Fragment>
            {contacts !== null ? (
                <TransitionGroup>
                {filtered !== null ?
                filtered.map(contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames="item">
                        <ContactItem contact={contact} />
                    </CSSTransition>
                )) :
                contacts.map(contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames="item">
                        <ContactItem contact={contact} />
                    </CSSTransition>
                    
                )) 
                }
                </TransitionGroup>
            ) : (<h4 className="my-3"></h4>)}
            
        </Fragment>
    );
};

export default Contacts