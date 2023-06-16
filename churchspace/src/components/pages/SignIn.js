import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import AuthService from "../reusables/AuthService";


const SignIn = (props) => {
  
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
  
    AuthService.login(username, password)
      .then((user) => {
        props.setUser(user); // Update the user state in the App component
        navigate("/");
      })
      .catch((error) => {
        setMessage(error.message);
        console.log(message);

      });
  };

  return (
    <div className='sign-in-content background center'>
        <div className='sign-in-box center'>
            <div>
                Welcome Back To Our Church Space
            </div>
            <h1>Sign-In</h1>
            <a>{message}</a>
            <div className='flex-row center'>
                NAME
                <input className='input-container' value={username} name='username' type='username' onChange={onChangeUsername} ></input>
            </div>
            <div className='flex-row center'>
                PASSWORD
                <input className='input-container' value={password} name='password' type='password' onChange={onChangePassword} ></input>
            </div>
            <div className='flex-row center'>
                <button className="button2"onClick={handleLogin}>SUBMIT</button>
            </div>
        </div>
    </div>
)
}

export default SignIn;