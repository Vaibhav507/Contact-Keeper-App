import React from "react";
import PropTypes from "prop-types";


const ContactItem = ({ contact }) => {

    const { name, email, phone ,type } = contact;

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
                <button className="btn btn-dark dtn-sm mx-2">Edit</button>
                <button className="btn btn-danger dtn-sm">Delete</button>
            </p>  
        </div>
    );
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}



export default ContactItem