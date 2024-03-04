import React, { useState } from 'react';
import '../../css/reusables/header.css'
import '../../css/reusables/positions.css'
import { useNavigate } from 'react-router-dom';
import AuthService from "../reusables/AuthService";
// import EventBus from "./EventBus"
import { useEffect } from 'react';

function Header(props) {
    
    const [showPastor, setShowPastor] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);
    const [showMember, setShowMember] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (props.user) {
          setShowPastor(props.user.roles.includes("ROLE_PASTOR"));
          setShowAdmin(props.user.roles.includes("ROLE_ADMIN"));
          setShowMember(props.user.roles.includes("ROLE_USER"));
        }
      }, [props.user]);

    const SignOut = () => {
        AuthService.logout();
        setShowPastor(false);
        setShowAdmin(false);
        setShowMember(false);
        navigate("/");
    };

    const linkClick = (linkInfo) =>{
        switch(linkInfo){
            case "Sign Out": SignOut();break;
            case "Sign In": navigate("/SignIn");break;
            case "Sign Up": navigate("/SignUp");break;
            case "Admin": navigate("/Admin");break;
            case "Site Setup": navigate("/SiteSetUp");break;
            case "Church Board": navigate("/ChurchBoard");break;
            case "My Profile": navigate("/Profile");break;
            case "My Messages": navigate("/MyMessages");break;
            case "Pastor Page": navigate("/Pastor");break;
            case "Home": navigate("/");break;
            case "Bible": navigate("/Bible");break;
            case "Links": navigate("/Links");break;
            case "Give": navigate("/Give");break;
            case "Contact Us": navigate("/ContactUs");break;
            default: navigate("/");break;
        }
    }

    const SignUpSignInSignOut = () => {
        console.log("who am in in header: ",props.user)
        if(!props.user.email){
        return(
        <>
            <div className='header-link' onClick={(event)=>linkClick("Sign In")}>SIGN-IN </div>
            <div className='header-link' onClick={(event)=>linkClick("Sign Up")}>SIGN-UP</div>
        </>
        )
        }else{
            return(
                <>
                    <div className='header-link' onClick={(event)=>linkClick("Sign Out")}>SIGN OUT</div>
                </>
            )
        }

    };

    const renderHeader = () => {

        if (showAdmin) {
            return (
                <>
                    <div className='header-link'onClick={(event)=>linkClick("Admin")}>ADMIN</div>
                    <div className='header-link'onClick={(event)=>linkClick("Site Setup")}>SITE SETUP</div>
                    <div className='header-link'onClick={(event)=>linkClick("Church Board")}>CHURCH BOARD</div>
                    <div className='header-link'onClick={(event)=>linkClick("My Profile")}>MY PROFILE</div>
                    <div className='header-link'onClick={(event)=>linkClick("My Messages")}>MESSAGES</div>
                </>
            )
        }else if (showPastor) {

            return (
                <>
                    <div className='header-link'onClick={(event)=>linkClick("Site Setup")}>SITE SETUP</div>
                    <div className='header-link'onClick={(event)=>linkClick("Church Board")}>CHURCH BOARD</div>
                    <div className='header-link'onClick={(event)=>linkClick("My Profile")}>MY PROFILE</div>
                    <div className='header-link'onClick={(event)=>linkClick("My Messages")}>MESSAGES</div>
                    <div className='header-link'onClick={(event)=>linkClick("Pastor Page")}>PASTOR PAGE</div>
                </>
            )
         }else if (showMember) {

            return (
               <>
                    <div className='header-link'onClick={(event)=>linkClick("Church Board")}>CHURCH BOARD</div>
                    <div className='header-link'onClick={(event)=>linkClick("My Profile")}>MY PROFILE</div>
                    <div className='header-link'onClick={(event)=>linkClick("My Messages")}>MESSAGES</div>
              </>
            )
        };
    }

    return (
        <div className="fill flex-col">
        <div className= "header-main-row">
            <img className = " flex-col third-width"
             onClick = {(event)=>linkClick("Home")}
             src="https://storage2.snappages.site/9VSNQ6/assets/images/9245090_7942x2766_500.png" 
             alt="Central Church">
             </img>
             <div className = 'flex-col third-width'></div>
             <div className = 'flex-col third-width'></div>

        </div>
        <div className='header-link-row center'>
                    <div className='header-link' onClick={(event)=>linkClick("Home")}>HOME</div>
                    <div className='header-link' onClick={(event)=>linkClick("Bible")}>READ THE BIBLE</div>
                    {renderHeader()}
                    <div className='header-link' onClick={(event)=>linkClick("Contact Us")}>CONTACT US</div>
                    <div className='header-link' onClick={(event)=>linkClick("Give")}>GIVE</div>
                    <div className='header-link' onClick={(event)=>linkClick("Links")}>LINKS</div>
                    {SignUpSignInSignOut()}
            </div>
        </div>
    )

}
export default Header