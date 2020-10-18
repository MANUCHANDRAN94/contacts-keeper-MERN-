import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
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

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // ? all our actions

    // Load User
    const loadUser = async () => {
        /* @todo - load token into global headers (allel authentication 
        venda ella callinte headerilum same token embed cheyanam so we make it global) */
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }

        try {
            const res = await axios.get('/api/auth');

            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    }

    // Register USer
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data //! here what we get is a {token:rxdtfvygbuhjn}
            });

            loadUser(); //login success aayal aa user load aavn
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg //! 'User already exists!!'
            });
        }
    }

    // Login User
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/auth', formData, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data //! here what we get is a {token:rxdtfvygbuhjn}
            });

            loadUser(); //login success aayal aa user load aavn
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg //! 'Invalid Credentials'
            });
        }
    }

    // Logout
    const logout = () => dispatch({ type: LOGOUT });

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS })



    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                login,
                clearErrors,
                loadUser,
                logout
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;