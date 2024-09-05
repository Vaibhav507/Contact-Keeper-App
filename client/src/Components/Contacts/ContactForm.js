import React, { useContext, useState } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {

    const contactContext = useContext(ContactContext);
    
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
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }


    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} className="form-control my-3" />
            <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} className="form-control my-3" />
            <input type="text" placeholder="Phone no." name="phone" value={phone} onChange={onChange} className="form-control my-3" />
            <h5 className="my-3">Contact Type</h5>
            <div className="d-flex gap-3">
                <input type="radio" name="type" value="personal" checked={ type==="personal" } onChange={onChange} className="form-check-input"/> Personal
                <input type="radio" name="type" value="professional" checked={ type==="professional" } onChange={onChange} className="form-check-input"/> Professional
            </div>
            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary bn-block my-3" />
            </div>
        </form>
    );
}

export default ContactForm