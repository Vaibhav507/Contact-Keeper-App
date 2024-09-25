import React, { useContext, useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import ContactForm from "../Contacts/ContactForm";
import ContactFilter from "../Contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {

    const authContext = useContext(AuthContext);
    
    useEffect(() => {
            authContext.loadUser();
        // eslint-disable-next-line
    }, [ ]);

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