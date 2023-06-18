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
                        <a href="/Messages">
                            <div className='header-link'>MESSAGES</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Admin">
                            <div className='header-link'>ADMIN</div>
                        </a>
                    </div>
                    <a href="/"></a>
                    <div className='header-link' onClick={SignOut}>SIGN OUT</div>
                </div>
            )
        }else if (showPastor) {

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
                        <a href="/ChurchBoard">
                            <div className='header-link'>CHURCH BOARD</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Bible">
                            <div className='header-link'>BIBLE ASV</div>
                        </a>
                    </div>
                    <div>
                        <a href="/MyProfile">
                            <div className='header-link'>MY PROFILE</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Messages">
                            <div className='header-link'>MESSAGES</div>
                        </a>
                    </div>
                   <div>
                        <a href="/Topics">
                            <div className='header-link'>MY TOPICS</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Posts">
                            <div className='header-link'>MY POSTS</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Comments">
                            <div className='header-link'>MY COMMENTS</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Pastor">
                            <div className='header-link'>PASTOR PAGE</div>
                        </a>
                    </div>
                    <a href="/"></a>
                    <div className='header-link' onClick={SignOut}>SIGN OUT</div>
                </div>
            )
         }else if (showMember) {

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
                        <a href="/ChurchBoard">
                            <div className='header-link'>CHURCH BOARD</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Bible">
                            <div className='header-link'>BIBLE ASV</div>
                        </a>
                    </div>
                    <div>
                        <a href="/MyProfile">
                            <div className='header-link'>MY PROFILE</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Messages">
                            <div className='header-link'>MESSAGES</div>
                        </a>
                    </div>
                   <div>
                        <a href="/Topics">
                            <div className='header-link'>MY TOPICS</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Posts">
                            <div className='header-link'>MY POSTS</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Comments">
                            <div className='header-link'>MY COMMENTS</div>
                        </a>
                    </div>

                    <a href="/"></a>
                    <div className='header-link' onClick={SignOut}>SIGN OUT</div>
                </div>
            )
        }else {
            return (
                <div className="fill flex-row">
                    <div className=' flex-row third-width'>
                        <a href="/"> <img src="//images.squarespace-cdn.com/content/v1/5a2329482278e7efd892db43/62f6ea53-540e-4e86-bbf7-96e7d4763258/BIG-PNG-FILE-TRANSPARENT-BG.png?format=1500w" alt="Crossroads Church"></img></a>
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
                        <a href="/SignIn">
                            <div className='header-link'>SIGN-IN</div>
                        </a>
                    </div>
                    <div>
                        <a href="/SignUp">
                            <div className='header-link'>SIGN-UP</div>
                        </a>
                    </div>
                    <div>
                        <a href="/MinistryLinks">
                            <div className='header-link'>MINISTRY LINKS</div>
                        </a>
                    </div>
                    <div>
                        <a href="/Give">
                            <div className='header-link'>GIVE</div>
                        </a>
                    </div>
                    <div>
                        <a href="/ContactUs">
                            <div className='header-link'>CONTACT US</div>
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