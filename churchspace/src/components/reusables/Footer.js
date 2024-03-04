import React, { useState } from 'react';
import '../../css/reusables/footer.css'
import '../../css/reusables/positions.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Footer(props) {
    
    const [address, setAddress] = useState({
        StreetAddress: "123 Divine Street",
        City: "Your City",
        State: "MO",
        Zip: 123456
    });

    const [socialMedia, setSocialMedia] = useState({
        Facebook: "https://www.facebook.com/centralmv",
        Youtube: "https://www.youtube.com/centralnow",
        Instagram: "https://www.instagram.com/centralchristianchurchmtvernon/"
    })

    const [hours, setHours]=useState({
        Sunday: "930a-1p",
        Monday: "8a-7p",
        Tuesday: "8a-7p",
        Wednesday: "8a-7p",
        Thursday: "8a-7p",
        Friday: "8a-5p",
        Saturday: "Closed"
    });

    const navigate = useNavigate();

    const connectClick = (tag) =>{
        switch(tag){
            case "Facebook": window.open(socialMedia.Facebook,'_blank', 'noopener noreferrer');break;
            case "Youtube": window.open(socialMedia.Youtube,'_blank', 'noopener noreferrer');break;
            case "Instagram": window.open(socialMedia.Instagram,'_blank', 'noopener noreferrer');break;
            default: navigate("/");break;
        }

    }

    return (
        <div className="footer-row">
            <div className='footer-col'>
                <div className='flex-row center large'>Location</div>
                <div className='flex-row center medium'>{address.StreetAddress}</div>
                <div className='flex-row center medium'>{address.City},&nbsp;{address.State}&nbsp;{address.Zip}</div>
            </div>
            <div className='footer-col'>
                <div className='flex-row center large'>Church Hours</div>
                <div className='flex-row center medium'>Sunday:&nbsp;{hours.Sunday}</div>
                <div className='flex-row center medium'>Monday:&nbsp;{hours.Monday}</div>
                <div className='flex-row center medium'>Tuesday:&nbsp;{hours.Tuesday}</div>
                <div className='flex-row center medium'>Wednesday:&nbsp;{hours.Wednesday}</div>
                <div className='flex-row center medium'>Thursday:&nbsp;{hours.Thursday}</div>
                <div className='flex-row center medium'>Friday:&nbsp;{hours.Friday}</div>
                <div className='flex-row center medium'>Saturday:&nbsp;{hours.Saturday}</div>
            </div>
            <div className='footer-col'>
            <div className='flex-row center large'>Connect</div>
                <div className='flex-row center medium pointer' onClick={(event)=>connectClick("Facebook")}>Facebook</div>
                <div className='flex-row center medium pointer' onClick={(event)=>connectClick("Youtube")}>Youtube</div>
                <div className='flex-row center medium pointer' onClick={(event)=>connectClick("Instagram")}>Instagram</div>
            </div>
        </div>
    )

}
export default Footer