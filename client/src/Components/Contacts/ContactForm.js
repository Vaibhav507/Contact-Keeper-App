import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {

    const contactContext = useContext(ContactContext);

    const { addContact, current, clearCurrent, updateContact } = contactContext;

    useEffect(() => {
        if(current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [ contactContext, current ]);

    const clearAll = () => {
        clearCurrent()
    }

    const [ contact, setContact ] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if(current===null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
    }


    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? "Edit Contact" : "Add Contact"}</h2>
            <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} className="form-control my-3" />
            <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} className="form-control my-3" />
            <input type="text" placeholder="Phone no." name="phone" value={phone} onChange={onChange} className="form-control my-3" />
            <h5 className="my-3">Contact Type</h5>
            <div className="d-flex gap-3">
                <input type="radio" name="type" value="personal" checked={ type==="personal" } onChange={onChange} className="form-check-input"/> Personal
                <input type="radio" name="type" value="professional" checked={ type==="professional" } onChange={onChange} className="form-check-input"/> Professional
            </div>
            <div>
                <input type="submit" value={current ? "Update Contact" : "Add Contact"} className="btn btn-primary w-100 my-3" />
            </div>
            {current && <div>
                <button className="btn btn-light w-100" onClick={clearAll}>Clear</button>
            </div> }
        </form>
    );
}

export default ContactForm