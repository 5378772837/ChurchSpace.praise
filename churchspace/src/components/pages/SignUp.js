import React, { useRef, useState } from 'react'
import '../../css/pages/SignIn.css'
import AuthService from '../reusables/AuthService';
import { useNavigate } from 'react-router';

const required = (value) => {
    if (!value) {
      return (
        <div>
          This field is required!
        </div>
      );
    }
  };

function SignUp(props) {
 
    let navigate = useNavigate();

    const checkBtn = useRef();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("")
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };

    const handleSignUp= (e) => {
      
      e.preventDefault();
  
      setMessage("");
  
      try {
        AuthService.register(username, email, password).then(
          (response) => {
            setMessage(response.data)
            navigate("/SignIn");
            window.location.reload();
          },)
        }catch(error) {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              setMessage(resMessage)
              console.log(resMessage);
          }
        
      } 
  

    return (
        <div className='sign-in-content background center'>
            <div className='sign-in-box center'>
                <div>
                    New User? Sign-up Today!
                </div>
                <h1>Sign-Up</h1>
                <a>{message}</a>
                <div className='flex-row center'>
                    EMAIL
                    <input className='input-container'  value={email} name='email' type='email' onChange={onChangeEmail} ></input>
                </div>
                <div className='flex-row center'>
                    PASSWORD
                    <input className='input-container' value={password} name='password' type='password' onChange={onChangePassword} ></input>
                </div>
                <div className='flex-row center'>
                    USERNAME
                    <input className='input-container' value={username} name='username' type='username' onChange={onChangeUsername} ></input>
                </div>
                <div className='flex-row center'>
                    <button className = "button2" onClick={handleSignUp}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
export default SignUp