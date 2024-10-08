import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT, 
    CLEAR_ERRORS 
} from '../types';

export default (state, action) => {
    switch (action.type) {

        case USER_LOADED: 
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
    

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
                //console.log("Before setting token:", localStorage.getItem('token'));
                //console.log("Token to be stored:", action.payload.token);
                localStorage.setItem('token', action.payload.token);
                //console.log("After setting token:", localStorage.getItem('token'));
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated: true,
                    loading: false
                };
            
            
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
            {
                //localStorage.removeItem('token');
                return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    loading: false,
                    user: null,
                    error: action.payload
                };
            }
                
            
            
        
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            };
        
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };

    
        default:
            return state;
    }
}