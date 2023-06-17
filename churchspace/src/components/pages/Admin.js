import React, { useState } from 'react'
import '../../css/pages/SignIn.css'
import '../../css/reusables/positions.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/admin.css'


function Admin(props)  {
  console.log("Admin Page")
  console.log(props.user)
  const [users, setUsers]=useState([]);
  const [selectedUser, setSelectedUser]=useState("");
  const [search, setSearch]=useState([]);

  const navigator = useNavigate()

  const handleSearchChange = (event) => {
      setSearch(event.target.value);
  };


const findAllUsers = () => {
  axios.get("http://localhost:8080/user/Admin/findAll", {
  headers: {
    Authorization: `Bearer ${props.user.token}`,
  },
})
  .then((response) => {
    console.log("response data", response.data);
    setUsers(response.data); 
  })
  .catch((error) => {
    console.log(error);
  });
};

  const findUser = (event) => {
  event.preventDefault();
    
  axios.get(`http://localhost:8080/user/Admin/findUserByEmail/${search}`, {
  headers: {
    Authorization: `Bearer ${props.user.token}`,
  },
})
  .then((response) => {
    console.log("response data", response.data);
    setUsers(response.data); // Make sure response.data is an array
  })
  .catch((error) => {
    console.log(error);
  });
};

    const handleUserClick = (selectedUser) => {

      navigator('/EditUser', { state: { editUser: selectedUser } });
    };
  


    const showUsers = () => {
      if (users.length === 0) {
        return <div>Loading...</div>; // Display a loading message or placeholder
      }
    
      return users.map((existingUser) => {
        const { id, username, email, enabled, roles, profile } = existingUser;
    
        return (
          <div className='user-edit-box' key={id} onClick={() => handleUserClick(existingUser)}>
            Click To Edit:
            <div className='flex-row center'>{profile && profile.name}</div>
            <div className='flex-row center'>
              {profile && profile.photoUrl && <img className="admin-picture-box" src={profile.photoUrl} alt={profile.name} />}
 
            </div>
            <div className='flex-row center'>Email: {email}</div>
            <div className='flex-row center'>Role: {roles[0].name}</div>
          </div>
        );
      });
    };
 
    

    return (
            <div className= 'fill'>
            <div className='admin-sidebar justify-content-center'>
                    <h3>Hello Administrator</h3>
                    <h2>Edit Users Here</h2>
                    SEARCH FOR A USER BY EMAIL
                    <input className='sidebar-input-container'  value={selectedUser.email} name='email' type='email' onChange={handleSearchChange} required></input>
                    <button className="button2" onClick={findUser}>FIND USER By EMAIL</button>
                    <h2>EDIT USERS</h2>
                    <h3>FIND ALL</h3>
                    <button className="button2" onClick={findAllUsers}>FIND ALL USERS</button>
            </div>
            <div className = 'user-disp-col flex-wrap scroll'>
              
                {showUsers()}
                
                </div>
            </div>         
 
  
   )
}



export default Admin