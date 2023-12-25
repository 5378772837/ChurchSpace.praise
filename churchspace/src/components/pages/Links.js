import React from 'react'
import '../../css/pages/home.css'
import '../../css/pages/links.css'
import '../../css/reusables/positions.css'
import { useState,useEffect } from 'react'
import axios from 'axios';



function Links(props) {

  const [links, setLinks]=useState([]);
  
  const findActiveLinks = (event) => {
    
  axios.get("http://localhost:8080/Link/findActive", {
  
  })
  .then((response) => {
    console.log("Active Links Response Data", response.data);
    setLinks(response.data); // Make sure response.data is an array
  })
  .catch((error) => {
    console.log(error);
  });
  };
  
  useEffect(() => {
    findActiveLinks()
  }, []);

const showLinks = () => {
  if (links.length === 0) {
    return <div>Checking for links now..</div>; // Display a loading message or placeholder
  }
  return links.map((linkInst) => {
    const {linkAddress, linkName, photoUrl} = linkInst;
    console.log("LinkInstance:"+linkInst.link)
    return (

            <a href={linkAddress} target='_blank' rel='noopener noreferrer'>
            <div className='link-box'>
            <div className=" link-head-row center large">{linkName}</div>
            <div className="link-body-row">
            <img className='link-body-row' src={photoUrl} alt='No Photo Available'></img>
            </div>
            </div>
            </a>

    );
  });
};

  
  return (
    
    <div className='flex-col background fill center'>
        <div className='flex-row center flex-wrap'>
        {showLinks()}
        </div>

    </div>


  )
}

export default Links