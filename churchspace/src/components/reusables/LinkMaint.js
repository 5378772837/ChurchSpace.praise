import React, { useEffect, useState } from 'react'
import '../../css/pages/home.css'
import '../../css/pages/links.css'
import '../../css/reusables/positions.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/SiteSetUp.css'



function LinkMaint({renderActiveLinks,renderAllLinks,renderAddLink,user})  {

  const [renderEditLink, setRenderEditLink] = useState(false)
  const [links, setLinks]=useState([]);
  const [link, setLink] = useState({photoUrl:'',linkName: 'link name',linkDescription:'link description',linkAddress:'website address',active:false})
  const [updatedLink, setUpdatedLink] = useState();


  useEffect(() => {
    if(renderActiveLinks){
        findActiveLinks()
    } 
    else if(renderAllLinks){
        findAllLinks()
    }
  }, []);
  

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    const tempLink = { ...link };
    tempLink[name] = value;
    setLink(tempLink);
  };



  const findActiveLinks = (event) => {

    setRenderEditLink(false)
    
  axios.get("http://localhost:8080/Link/Pastor/findActive", {
  headers: {
    Authorization: `Bearer ${user.token}`,
  },
  })
  .then((response) => {
    console.log("Active Links Response Data", response.data);
    setLinks(response.data); // Make sure response.data is an array
  })
  .catch((error) => {
    console.log(error);
  });
  };
  
  const findAllLinks = (event) => {

    setRenderEditLink(false);
    
  axios.get("http://localhost:8080/Link/Pastor/findAll", {
  headers: {
    Authorization: `Bearer ${user.token}`,
  },
})
  .then((response) => {
    console.log("Active Links Response Data", response.data);
    setLinks(response.data); // Make sure response.data is an array
  })
  .catch((error) => {
    console.log(error);
  });
};


  const linkActiveToggler = (event, linkInst) => {
    console.log(linkInst);
    const checked = event.target.checked;
    setUpdatedLink = {
      ...linkInst,
      active: checked,
    };
  updateLink();

  };

  const updateLink = () => {

    axios
    .post('http://localhost:8080/Link/Pastor/updateLink', updatedLink, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    .then((response) => {
      setLinks(response.data);
    })
    .catch((error) => {
      console.error(error); // Log and handle any errors
    });
  }

  const saveLink = () => {
    console.log('You are here at the save link after clicking save link')
    axios
    .post('http://localhost:8080/Link/Pastor/save', link, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    .then((response) => {
      setLinks(response.data);
    })
    .catch((error) => {
      console.error(error); // Log and handle any errors
    });
  }




const addLink = (event) => {

    return (
      
 
          <div className="flex-row fill">
            <div className='flex-col two-third-width'>
            <div className='flex-row fill center'>
             <img className="picture-box" src={link.photoUrl} alt={"photo url not present"} />
            </div>
            </div>
            <div className = 'data-col fill'>
            <div className='flex-row center'>Link Name:
                <input  className = 'input-container-edit center' name='linkName' type='text' onChange={changeHandler} ></input>
           </div>
           <div className='flex-row center'>Link Description:
                <input  className = 'input-container-edit center' name='linkDescription' type='text' onChange={changeHandler} ></input>
           </div>
           <div className='flex-row center'>Link Photo URL:
                <input  className = 'input-container-edit center' name='photoUrl' type='text' onChange={changeHandler} ></input>
           </div>
           <div className='flex-row center'>Link Address:
                <input  className = 'input-container-edit center' name='linkAddress' type='text' onChange={changeHandler} ></input>
           </div>
            <div className="flex-row">Active: 
            <input name="active" type="checkbox" checked={link.active} onChange={changeHandler} />
            </div>
            <div className="flex-row">Save Link: 
            <button className="button2" onClick={saveLink}>ADD NEW LINK</button>
            </div>
            </div>
       </div>
       
     
      
    );
  };



const handleLinkClick = (linkInst) => {

    return (
      
      <div className='link-edit-box'>
          <div className="flex-col fill">
            <div className='link-box'>
            <div className='picture-col'>
            <div className='picture-row center'>
              {linkInst.photoUrl && <img className="picture-box" src={linkInst.photoUrl} alt={"photo url not present"} />}
            </div>
            </div>
            <div className="flex-row"> ID: {linkInst.id}</div>
            <div className=" link-head-row center large">Link Name: {linkInst.linkName}</div>
            <div className=" flex-row">Link Description: {linkInst.linkDescription}</div>
            <div className=" flex-row">Link photoURL: {linkInst.photoUrl}</div>
            <img className='link-body-row' src={linkInst.photoUrl} alt='No Photo Available'></img>
            <div className=" flex-row">Link Address: {linkInst.linkAddress}</div>
            <div className="flex-row">Active: <input name="active" type="checkbox" checked={linkInst.active} onChange={(event) => linkActiveToggler(event, linkInst)} /></div>
            </div>
          </div>
        </div>
      
    );
  };






const showLinks = () => {
  if (links.length === 0) {
    return <div>Checking for links now..</div>; // Display a loading message or placeholder
  }
  return links.map((linkInst) => {
    const { id, link, creatorName, active} = linkInst;

    return (

    <div>

            <div className='link-box'key={id} onClick={() => handleLinkClick(linkInst)}>
            <div className=" link-head-row center large">{linkInst.linkName}</div>
            <div className="link-body-row">
            <img className='link-body-row' src={linkInst.photoUrl} alt='No Photo Available'></img>
            </div>
            <div className="flex-row center">Active: <input name="active" type="checkbox" checked={active} onChange={(event) => linkActiveToggler(event, linkInst)} /></div>
            </div>
     </div>
      
    );
  });
};


return (
    <div className='flex-col background fill center'>
        <div className='flex-row flex-wrap full-width'>
      {renderActiveLinks && showLinks()}
      {renderAllLinks && showLinks()}
      {renderAddLink && addLink()}
      </div>
      </div>
)
};


export default LinkMaint