import { useState } from 'react';
import { Redirect } from 'react-router';

import { useAuthContext, signInUserSuccess, signInUserError } from '../AuthContext';

import firebase from 'firebase/app';
import 'firebase/auth';

import './Login.scss';

function Login() {
    const { auth, dispatch } = useAuthContext();

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    async function signInUser(email, password) {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(signInUserSuccess(response.user));
        } catch (error) {
            dispatch(signInUserError(error));
        }
    }

    return auth.user ? (
        <Redirect to={{ pathname: '/feed' }} />
    ) : (
            <div className="Login">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    signInUser(email, password);
                }}>
                    <input type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
                    <input type="password" maxLength={20} placeholder="Password" required onChange={event => setPassword(event.target.value)} />
                    <button type="submit">Login</button>
                    {
                        auth.error ? <p>{auth.error.message}</p> : null
                    }
                    <hr />
                    <a href="/createaccount">Create an Account</a>
                </form>
            </div >
        )
}

export default Login;