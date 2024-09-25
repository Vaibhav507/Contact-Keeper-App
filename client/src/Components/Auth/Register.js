import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const { setAlert } = alertContext;

    const { register, error, clearErrors, isAuthenticated } = authContext;
    
    useEffect(() => {

        if(isAuthenticated) {
            navigate('/');
        }

        if(error === 'User already exists') {
            setAlert(error, "danger");
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, navigate]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '')
            setAlert("Please enter all fields","danger");
        else if (password !== password2)
            setAlert("Password does not match","danger");
        else
            register({
                name,
                email,
                password  
            });
    }

    return (
        <div className="container d-flex flex-column gap-3 my-5 col-8">
            <h1 className="text-center">
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
                <div className="form-group d-flex flex-column gap-1">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group d-flex flex-column gap-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group d-flex flex-column gap-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} minLength="6" />
                </div>
                <div className="form-group d-flex flex-column gap-1">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} minLength="6" />
                </div>
                <input type="submit" value="Register" className="btn btn-primary w-100 my-2" />
            </form>
        </div>
    )
}

export default Register