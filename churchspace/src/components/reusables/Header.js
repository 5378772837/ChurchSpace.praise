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
    };

    const renderHeader = () => {
    


        if (showAdmin) {

            return (
                <div className='fill flex-row'>
                    <div className='third-width'>
                        <a href="/"> <img className='logo' src="//images.squarespace-cdn.com/content/v1/5a2329482278e7efd892db43/62f6ea53-540e-4e86-bbf7-96e7d4763258/BIG-PNG-FILE-TRANSPARENT-BG.png?format=1500w" alt="Crossroads Church" /></a>
                    </div>
                    <div>
                        <a href="/">
                            <div className='header-link'>HOME</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Bible">
                            <div className='header-link'>BIBLE ASV</div>
                        </a>
                    </div>
                    <div>
                        <a href="/MyMessages">
                            <div className='header-link'>MESSAGES</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Admin">
                            <div className='header-link'>ADMIN</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Links">
                            <div className='header-link center'>LINKS</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Give">
                            <div className='header-link center'>GIVE</div>
                        </a>
                    </div>
                    <a href="/">
                    <div className='header-link' onClick={SignOut}>SIGN OUT</div>
                    </a>
                </div>
            )
        }else if (showPastor) {

            return (
                <div className='fill flex-row'>
                    <div className='quarter-width'>
                        <a href="/"> <img className='logo' src="//images.squarespace-cdn.com/content/v1/5a2329482278e7efd892db43/62f6ea53-540e-4e86-bbf7-96e7d4763258/BIG-PNG-FILE-TRANSPARENT-BG.png?format=1500w" alt="Crossroads Church" /></a>
                    </div>
                    <div className='header-link'>
                        <a href="/">
                        <div className='header-link center'>HOME</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/ChurchBoard">
                        <div className='header-link center'>CHURCH BOARD</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Bible">
                        <div className='header-link center'>BIBLE ASV</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Profile">
                        <div className='header-link center'>MY PROFILE</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/MyMessages">
                        <div className='header-link center'>MESSAGES</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Pastor">
                        <div className='header-link center'>PASTOR PAGE</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Links">
                            <div className='header-link center'>LINKS</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Give">
                            <div className='header-link center'>GIVE</div>
                        </a>
                    </div>
                    <div className='header-link'>
                    <a href="/">
                    <div className='header-link center' onClick={SignOut}>SIGN OUT</div>
                    </a>
                    </div>
                </div>
            )
         }else if (showMember) {

            return (
                <div className='fill flex-row'>
                    <div className='quarter-width'>
                        <a href="/"> <img className='logo' src="//images.squarespace-cdn.com/content/v1/5a2329482278e7efd892db43/62f6ea53-540e-4e86-bbf7-96e7d4763258/BIG-PNG-FILE-TRANSPARENT-BG.png?format=1500w" alt="Crossroads Church" /></a>
                    </div>
                    <div className='header-link'>
                        <a href="/">
                            <div className='header-link center'>HOME</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/ChurchBoard">
                            <div className='header-link center'>CHURCH BOARD</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Bible">
                            <div className='header-link center'>BIBLE ASV</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Profile">
                            <div className='header-link center'>MY PROFILE</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/MyMessages">
                            <div className='header-link center'>MESSAGES</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Links">
                            <div className='header-link center'>LINKS</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Give">
                            <div className='header-link center'>GIVE</div>
                        </a>
                    </div>
                    <div className='header-link'>
                    <a href="/">
                    <div className='header-link center' onClick={SignOut}>SIGN OUT</div>
                    </a>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="fill flex-row">
                    <div className=' flex-row quarter-width'>
                        <a href="/"> <img src="//images.squarespace-cdn.com/content/v1/5a2329482278e7efd892db43/62f6ea53-540e-4e86-bbf7-96e7d4763258/BIG-PNG-FILE-TRANSPARENT-BG.png?format=1500w" alt="Crossroads Church"></img></a>
                    </div>
                    <div className='header-link'>
                        <a href="/">
                            <div className='header-link center'>HOME</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Bible">
                            <div className='header-link center'>BIBLE ASV</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/SignIn">
                            <div className='header-link center'>SIGN-IN</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/SignUp">
                            <div className='header-link center'>SIGN-UP</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Links">
                            <div className='header-link center'>LINKS</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/Give">
                            <div className='header-link center'>GIVE</div>
                        </a>
                    </div>
                    <div className='header-link'>
                        <a href="/ContactUs">
                            <div className='header-link center'>CONTACT US</div>
                        </a>
                    </div>

                </div>
            )
        }
    }
    return (
        
        renderHeader()
    )

}
export default Header