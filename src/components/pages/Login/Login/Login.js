import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const Login = () => {
    const {signinUsingGoogle} = useAuth();
    return (
        <div>
            <h2 className="text-center m-5">Please Login With Google</h2>
            <button onClick={signinUsingGoogle} className="btn btn-warning m-5">Google Sign-In</button>
        </div>
    );
};

export default Login;