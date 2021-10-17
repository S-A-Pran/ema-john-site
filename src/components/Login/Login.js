import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log("came from", location.state?.from);
    const redirectUrl = location.state?.from || "/";
    const handleGoogleSignin = () =>{
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUrl);
            })
    }
    return (
        <div className="login-form">
           <div>
               <h2>Login</h2>
               <form>
                   <input type="email" />
                   <br />
                   <input type="password" />
                   <br />
                   <input type="submit" value="Submit" />
               </form>
               <p>new to ema-john? <Link to="/register">Create Account</Link></p>
               <div>-----------or------------</div>
               <button onClick={handleGoogleSignin} className="btn-regular">Google Sign In</button>
           </div> 
        </div>
    );
};

export default Login;