import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";                       
import { useNavigate } from "react-router-dom";

const Login = () => {

    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const navigate = useNavigate();

    const { setAlert } = alertContext;

    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {

        if(isAuthenticated) {
            navigate('/');
        }

        if(error === 'Invalid Credentials') {
            setAlert(error, "danger");
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, navigate]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        if(email === "" || password === "") {
            setAlert("Please fill in all fields","danger");
        } else {
            login({
                email,
                password
            });
        }
            
    }

    return (
        <div className="container d-flex flex-column gap-3 my-5 col-8">
            <h1 className="text-center">
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
                <div className="form-group d-flex flex-column gap-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group d-flex flex-column gap-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <input type="submit" value="Login" className="btn btn-primary w-100 my-2" />
            </form>
        </div>
    )
}

export default Login