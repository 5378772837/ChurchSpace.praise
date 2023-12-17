

import React, { useEffect, useState } from 'react'
import '../../css/pages/home.css'
import '../../css/pages/links.css'
import '../../css/reusables/positions.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/SiteSetUp.css'


function SiteSetUpSidebar({setRenderActiveLinks,setRenderAllLinks,setRenderAddLink,setRenderBackground,setRenderHomeImage,setRenderLogo,setRenderSlides,user})  {

   function findAllLinks (event) {
        setRenderActiveLinks(false);
        setRenderAllLinks(true);
        setRenderAddLink(false);
    }
    
    function findActiveLinks (event) {
        setRenderActiveLinks(true);
        setRenderAllLinks(false);
        setRenderAddLink(false);
    }

    function addLink (event) {
        setRenderActiveLinks(false);
        setRenderAllLinks(false);
        setRenderAddLink(true);
    }

    const findBackground= (event) => {
    
    }
    const findHeader= (event) => {
    
    }
    const findActiveSlides= (event) => {
    
    }
    const findAllSlides= (event) => {
    
    }
    const addSlide= (event) => {
    
    }



return (
<div className = 'flex-col fill'>

            <h3>Hello {user.name}</h3>
            <div className="flex-row">
            <button className="button2" onClick={findAllLinks}>FIND ALL LINKS</button>
            </div>
            <div className="flex-row">
            <button className="button2" onClick={findActiveLinks}>FIND ACTIVE LINKS</button>
            </div>
            <div className="flex-row">
            <button className="button2" onClick={addLink}>ADD NEW LINK</button>
            </div>
            <div className="flex-row ">
            <button className="button2" onClick={findBackground}>FIND BACKGROUND IMAGE</button>
            </div>
            <div className="flex-row ">
            <button className="button2" onClick={findHeader}>FIND HEADER IMAGE</button>
            </div>
            <div className="flex-row ">
            <button className="button2" onClick={findActiveSlides}>FIND ACTIVE SLIDES</button>
            </div>
            <div className="flex-row ">
            <button className="button2" onClick={findAllSlides}>FIND ALL SLIDES</button>
            </div>
            <div className="flex-row ">
            <button className="button2" onClick={addSlide}>ADD NEW SLIDE</button>
            </div> 
</div>

)
}


export default SiteSetUpSidebar