import React, { useContext, useEffect, useRef } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {

    const contactContext = useContext(ContactContext);

    const { filterContacts, clearFilter, filtered } = contactContext;

    const text = useRef('');

    useEffect(()=> {
        if(filtered === null) {
            text.current.value = '';
        }
    }, [filtered]);

    const onChange = e => {
        if(text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Contacts..." className="w-100" onChange={onChange} />
        </form>
    )
}

export default ContactFilter