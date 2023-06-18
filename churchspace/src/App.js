import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import "../src/App.css";

import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import PageWrapper from "./components/reusables/PageWrapper";
import Home from "./components/pages/Home";
import Bible from "./components/pages/Bible";
import EditUser from "./components/pages/EditUser"
import AuthService from "./components/reusables/AuthService";
import Pastor from "./components/pages/Pastor";
import ChurchBoard from "./components/pages/ChurchBoard";
import Subject from "./components/pages/Subject";
// import User from "./components/pages/User";
// import Pastor from "./components/pages/Pastor";
import Admin from "./components/pages/Admin";

// import AuthVerify from "./reusables/AuthVerify";



const App = () => {
  
  const [user, setUser] = useState({token:"",type:"Bearer",email:"",name:"",roles: []});

  
  useEffect(() => {
    const storedUser = AuthService.getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  
  return (
    <PageWrapper user = {user} setUser = {setUser}>
      <Routes>
          <Route exact path="/" element={<Home user={user} setUser={setUser}/>} />
          <Route exact path="/SignIn" element={<SignIn user={user} setUser={setUser}/>} />
          <Route exact path="/SignUp" element={<SignUp user={user} setUser={setUser}/>} />
          <Route exact path="/Bible" element={<Bible user={user} setUser={setUser}/>} />
          <Route exact path="/Pastor" element={<Pastor user={user} setUser={setUser}/>} />
          {/* <Route path="/User" element={<User user={user} setUser={setUser}/>} />
          <Route path="/Breeder" element={Pastor user={user} setUser={setUser}/>} />*/}
          <Route exact path="/EditUser" element={<EditUser user={user} setUser={setUser}/>} />
          <Route exact path="/ChurchBoard" element={<ChurchBoard user={user} setUser={setUser}/>}/>
          <Route exact path="/Subject" element={<Subject user={user} setUser={setUser}/>}/>
          <Route path="/Admin" element={<Admin user={user} setUser={setUser}/>} />
      </Routes>
    </PageWrapper>
  )
}
export default App