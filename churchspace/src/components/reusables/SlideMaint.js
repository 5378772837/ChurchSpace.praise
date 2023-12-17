import React, { useEffect, useState } from 'react'
import '../../css/pages/home.css'
import '../../css/pages/links.css'
import '../../css/reusables/positions.css'
import axios from 'axios';
import '../reusables/SiteSetUpSidebar'
import { useNavigate } from 'react-router-dom';
import '../../css/pages/SiteSetUp.css'
import SiteSetUpSidebar from '../reusables/SiteSetUpSidebar';



function SlideMaint(props)  {



const [slides, setSlides]=useState([]);
const [renderSlides, setRenderSlides]=useState(false);
const [renderAddSlide, setRenderAddSlide]=useState(false);

const [descriptions, setDescriptions]=useState([]);



const slideChangeHandler = (event, slideInst) => {
  console.log(slideInst);
  const checked = event.target.checked;
  const updatedSlide = {
    ...slideInst,
    active: checked,
  };

  axios
    .post('http://localhost:8080/HomeImages/Pastor/updateHomeImage', updatedSlide, {
      headers: {
        Authorization: `Bearer ${props.user.token}`,
      },
    })
    .then((response) => {
      setHomeImages(response.data)
      
    })
    .catch((error) => {
      console.error(error); // Log and handle any errors
    });
};



}



export default SlideMaint;