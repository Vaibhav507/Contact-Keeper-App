import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";


const ContactItem = ({ contact }) => {

    const contactContext = useContext(ContactContext);

    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { _id, name, email, phone ,type } = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    }

    return(
        <div className="card bg-light p-3 my-2">
            <h3 className="text-primary text-left">
                {name}{ ' '}<span style={{ float: "right" }} className={"badge " + (type === "professional" ? "text-bg-success": "text-bg-primary")}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </h3>
            <ul className="list-unstyled">
                {email && (<li>
                    <i className="fas fa-envelope-open"></i> {email}
                </li>)}
                {phone && (<li>
                    <i className="fas fa-phone"></i> {phone}
                </li>)}
            </ul>
            <p>
                <button className="btn btn-dark dtn-sm mx-2" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger dtn-sm" onClick={onDelete}>Delete</button>
            </p>  
        </div>
    );
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}



export default ContactItem