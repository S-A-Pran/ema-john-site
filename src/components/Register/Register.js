import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input placeholder="Enter your email" type="email" name="" id="" />
                    <br />
                    <input placeholder="Enter your password" type="password" name="" id="" />
                    <br />
                    <input placeholder="Re-enter password" type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-------------or------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;