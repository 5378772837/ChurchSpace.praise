import React, { useEffect, useState } from 'react'
import '../../css/pages/home.css'
import '../../css/pages/links.css'
import '../../css/reusables/positions.css'
import '../reusables/SiteSetUpSidebar'
import { useNavigate } from 'react-router-dom';
import '../../css/pages/SiteSetUp.css'
import SiteSetUpSidebar from '../reusables/SiteSetUpSidebar';
import LinkMaint from '../reusables/LinkMaint';


function SiteSetUp(props)  {

  const[renderActiveLinks,setRenderActiveLinks] = useState(true);
  const[renderAllLinks,setRenderAllLinks] = useState(false)
  const[renderAddLink, setRenderAddLink] = useState(false)
  const[renderBackground, setRenderBackground] = useState(false);
  const[renderLogo, setRenderLogo] = useState(false);
  const[renderSlides, setRenderSlides] = useState(false);
  const[renderHomeImages, setRenderHomeImage] = useState(false);

  
  const showLinks = (event) => {
    return(
    <LinkMaint 
    renderActiveLinks = {renderActiveLinks}
    renderAllLinks = {renderAllLinks}
    renderAddLink={renderAddLink} 
    user={props.user}/>)
  };



    return (
            <div className= 'fill'>
              <div className='pastor-sidebar justify-content-center'>
              <SiteSetUpSidebar
          setRenderActiveLinks={setRenderActiveLinks}
          setRenderAllLinks={setRenderAllLinks}
          setRenderAddLink={setRenderAddLink}
          setRenderBackground={setRenderBackground}
          setRenderHomeImage={setRenderHomeImage}
          setRenderLogo={setRenderLogo}
          setRenderSlides={setRenderSlides}
          user= {props.user}
        />
                </div>
              <div className='flex-col-past'>
                <div className="pastor-sub-header center">
                  <a className='large'>Site Maintenance</a>
                </div>
              <div className='flex-row fill'>
              {renderAllLinks && showLinks()}
              {renderActiveLinks && showLinks()}
              {renderAddLink && showLinks()}
              {/* {renderBackground && showBackground()}
              {renderLogo && showLogo()}
              {renderSlides && showSlides()}
              {renderHomeImages && showHomeImages()} */}
              </div>
              </div>
              </div>
                   
 
  
   )
}


export default SiteSetUp