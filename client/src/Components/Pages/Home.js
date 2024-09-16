import React from "react";
import Contacts from "../Contacts/Contacts";
import ContactForm from "../Contacts/ContactForm";
import ContactFilter from "../Contacts/ContactFilter";

const Home = () => {
    return(
        <div className="my-5 row"> 
            <div className="col">
                <ContactForm />
            </div>
            <div className="col">
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    );
}

export default Home