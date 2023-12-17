import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../css/pages/EditUser.css'

function Church(props) {
    const location = useLocation();
    const [email, setEmail]=useState()
    const [currentUser, setCurrentUser] = useState({id:0,email:"pending@response",username:"pendingres"});

    const [responseUser, setResponseUser] = useState({id:0,email:"pending@response",username:"pendingres"});
    const navigate = useNavigate();


    useEffect(() => {
    if(email === props.user.email){
    getProfile();
    }else{setEmail(props.user.email)}
    }, [email]);



    useEffect(() => {
      setCurrentUser(responseUser)
    }, [responseUser]);


  const handleUpdateClick = (event) => {
    event.preventDefault();
    console.log(currentUser)
    axios
      .post("http://localhost:8080/user/User/updateUser", currentUser, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        setResponseUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProfile = () => {
    axios
    .get(`http://localhost:8080/user/User/findUserByEmail/${email}`, {
      headers: {
        Authorization: `Bearer ${props.user.token}`,
      },
    })
    .then((response) => {
      setResponseUser(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });



  }

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  
    const tempUser = { ...currentUser };
  
    if (name.startsWith("currentUser.profile.")) {
      const profileField = name.split("currentUser.profile.")[1];
      tempUser.profile[profileField] = value;
    } else {
      tempUser[name] = value;
    }
  
    setCurrentUser(tempUser);
  };

  return (
   <div className='page'>
  <div className='picture-col'>
    <div className='picture-row center'>
              {currentUser.profile && currentUser.profile.photoUrl && <img className="picture-box" src={currentUser.profile.photoUrl} alt={currentUser.profile.name} />}
    </div>
    </div>
    <div className='data-col'>
    <div className='content-row center large'>
     Username: {currentUser.username}
    </div>
    <div className='content-row center large'>
    Email: {currentUser.email}
    </div>
    <div className='content-row right'>
    Profile Name<input className='input-container-edit center' value={currentUser.profile && currentUser.profile.name} name='currentUser.profile.name' type="text" onChange={changeHandler} />
    </div>
    <div className='content-row-aboutMe right'>
    Profile About Me
    <textarea className = 'input-container-aboutMe center'  style={{ whiteSpace: 'normal' }} value= {currentUser.profile && currentUser.profile.aboutMe} name='currentUser.profile.aboutMe' type="text" onChange={changeHandler} ></textarea>
    </div>
    <div className='content-row right'>
    Photo URL
    <input className = 'input-container-edit    center'  value= {currentUser.profile && currentUser.profile.photoUrl} name='currentUser.profile.photoUrl' type="text" onChange={changeHandler} ></input>
    </div>
    <div className='content-row right'>
    <div className='content-row right'>
  User Enabled:
  <input className='input-container-edit center' checked={currentUser.enabled} name='enabled' type='checkbox' onChange={changeHandler}/>
    </div>
    </div>
 
        <div className= 'content-row right'>
            <button className= 'button center' onClick={handleUpdateClick}>UPDATE</button>
        </div>
        </div>
        </div>
  
      



  )
}

export default Church