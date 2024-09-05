import React from "react";
import Contacts from "../Contacts/Contacts";
import ContactForm from "../Contacts/ContactForm";

const Home = () => {
    return(
        <div className="my-5 row"> 
            <div className="col">
                <ContactForm />
            </div>
            <div className="col">
                <Contacts />
            </div>
        </div>
    );
}

export default Home