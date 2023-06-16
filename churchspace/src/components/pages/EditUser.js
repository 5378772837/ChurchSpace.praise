import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../css/pages/EditUser.css'

function EditUser(props) {
    const location = useLocation();
    const { editUser } = location.state;
    const [selectedUser, setSelectedUser] = useState({...editUser, roles: editUser.roles.map((role) => ({ id: role.id, name: role.name })),});

    const [responseUser, setResponseUser] = useState(editUser);
    const navigate = useNavigate();


  useEffect(() => {
    if (selectedUser === responseUser) {
      setSelectedUser(editUser);
    } else {
      setSelectedUser(responseUser);
    }
  }, [responseUser]);

  const handleUpdateClick = (event) => {
    event.preventDefault();
    console.log(selectedUser)
    axios
      .post("http://localhost:8080/user/Admin/updateUser", selectedUser, {
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
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  
    const tempUser = { ...selectedUser };
  
    if (name === "roles") {
      const role = event.target.value;
      const isChecked = event.target.checked;
  
      if (isChecked) {
        // Remove existing roles from the array
        tempUser.roles = [];
  
        // Add the selected role at index 0
        tempUser.roles.unshift(role);
      } else {
        const roleIndex = tempUser.roles.indexOf(role);
        if (roleIndex !== -1) {
          tempUser.roles.splice(roleIndex, 1);
        }
      }
    } else if (name.startsWith("selectedUser.profile.")) {
      const profileField = name.split("selectedUser.profile.")[1];
      tempUser.profile[profileField] = value;
    } else {
      tempUser[name] = value;
    }
  
    setSelectedUser(tempUser);
  };

  return (
   <div className='page'>
  <div className='picture-col'>
    <div className='picture-row center'>
              {selectedUser.profile && selectedUser.profile.photoUrl && <img className="picture-box" src={selectedUser.profile.photoUrl} alt={selectedUser.profile.name} />}
    </div>
    </div>
    <div className='data-col'>
    <div className='content-row right'>
     Username
      <input  className = 'input-container-edit center' value={selectedUser.username} name='username' type='username' onChange={changeHandler} ></input>
    </div>
    <div className='content-row right'>
    Email
      <input className = 'input-container-edit center'  value={selectedUser.email} name='email' type="email" onChange={changeHandler} ></input>
    </div>
    <div className="content-row right">
        <div className="margin-lr">
        <label className="margin-lr">
            User Roles:
        </label>
        </div>
        <div>
  <label className="margin-lr">
    User
    <input
      className="margin-lr"
      type="checkbox"
      name="roles"
      value="ROLE_USER"
      checked={selectedUser.roles.includes("ROLE_USER")}
      onChange={changeHandler}
    />
  </label>
</div>
<div>
  <label className="margin-lr">
    Pastor
    <input
      className="margin-lr"
      type="checkbox"
      name="roles"
      value="ROLE_PASTOR"
      checked={selectedUser.roles.includes("ROLE_PASTOR")}
      onChange={changeHandler}
    />
  </label>
</div>
<div>
  <label className="margin-lr">
    Admin
    <input
      className="margin-lr"
      type="checkbox"
      name="roles"
      value="ROLE_ADMIN"
      checked={selectedUser.roles.includes("ROLE_ADMIN")}
      onChange={changeHandler}
    />
  </label>
</div>
</div>
    <div className='content-row right'>
    Profile Name
    <input className = 'input-container-edit center'  value= {selectedUser.profile && selectedUser.profile.name} name='selectedUser.profile.name' type="selectedUser.profile.name" onChange={changeHandler} ></input>
    </div>
    <div className='content-row-aboutMe right'>
    Profile About Me
    <textarea className = 'input-container-aboutMe center'  style={{ whiteSpace: 'normal' }} value= {selectedUser.profile && selectedUser.profile.aboutMe} name='selectedUser.profile.aboutMe' type="selectedUser.profile.aboutMe" onChange={changeHandler} ></textarea>
    </div>
    <div className='content-row right'>
    Photo URL
    <input className = 'input-container-edit    center'  value= {selectedUser.profile && selectedUser.profile.photoUrl} name='selectedUser.profile.photoUrl' type="selectedUser.profile.photoUrl" onChange={changeHandler} ></input>
    </div>
    <div className='content-row right'>
    <div className='content-row right'>
  User Enabled:
  <input className='input-container-edit center' checked={selectedUser.enabled} name='enabled' type='checkbox' onChange={changeHandler}/>
</div>
</div>
 
        <div className= 'content-row right'>
            <button className= 'button center' onClick={handleUpdateClick}>UPDATE</button>
        </div>
        </div>
        </div>
  
      



  )
}

export default EditUser;