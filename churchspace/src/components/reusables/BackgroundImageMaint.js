import React, { useEffect, useState } from 'react'
import '../../css/pages/home.css'
import '../../css/pages/links.css'
import '../../css/reusables/positions.css'
import axios from 'axios';
import '../reusables/SiteSetUpSidebar'
import { useNavigate } from 'react-router-dom';
import '../../css/pages/SiteSetUp.css'
import SiteSetUpSidebar from '../reusables/SiteSetUpSidebar';


function BackgroundImageMaint(props)  {


return (
    <div className= 'fill'>
      <div>{SiteSetUpSidebar}</div>
      <div className='flex-col-past'>
        <div className="pastor-sub-header center">
          <a className='large'>Create New Subject:</a>
        <textarea className='sidebar-input-container3' style={{ whiteSpace: 'normal' }}  name='link' type='text' onChange={handleNewSubjectChange}></textarea>
        <button className="button2" onClick={saveSubject}>ADD NEW SUBJECT</button>
        </div>
        <div className='pastor-sub-body'>
      {renderLinks && showLinks()}
      {renderBackground && showBackground()}
      {renderLogo && showLogo()}
      {renderSlides && showSlides()}
      {renderHomeImages && showHomeImages()}
      </div>
      </div>
      </div>
           


)
}
export default BackgroundImageMaint;