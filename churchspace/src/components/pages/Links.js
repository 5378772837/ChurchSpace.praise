import React from 'react'
import '../../css/pages/home.css'
import '../../css/pages/links.css'
import '../../css/reusables/positions.css'



function Links(props) {
  
  return (
    
    <div className='flex-col background fill center'>
        <div className='flex-row center flex-wrap'>

        <a href='https://www.gty.org/' target='_blank' rel='noopener noreferrer'>
          <div className='link-box'>
          
            <div className='link-head-row center large'>
                Grace To You Ministries
              </div>
              <div className='link-body-row'>
              <img className='link-body-row' src="https://www.thepastorreformed.com/wp-content/uploads/2016/05/john-macarthur-1024x682.jpg" alt="The Arc Encounter"></img>
              </div>     
          </div>
          </a>
          <a href='https://apologiastudios.com/' target='_blank' rel='noopener noreferrer'>
          <div className='link-box'>
              <div className='link-head-row center large'>
                Apologia Studios
              </div>
              <div className='link-body-row'>
              <img className='link-body-row' src="https://cdn.shopify.com/s/files/1/0071/8461/3474/files/Brands-Apologia-Church-600x600_450x.jpg?v=1614382511" alt="The Arc Encounter"></img>
              </div>
            </div>
            </a>
            <a href='https://www.example.comhttps://apologiastudios.com/course-category/bahnsen-u/' target='_blank' rel='noopener noreferrer'>
            <div className='link-box'>
              <div className='link-head-row center large'>
                Free Seminary Courses
              </div>
              <div className='link-body-row'>
              <img className='link-body-row' src="https://apologiastudios.com/wp-content/uploads/2021/10/167407451863c85996c67f2.jpeg" alt="The Arc Encounter"></img>
              </div>
            </div>
            </a>
            <a href='https://arkencounter.com/' target='_blank' rel='noopener noreferrer'>
            <div className='link-box'>
                <div className='link-head-row center large'>
                The ARC Encounter
                </div>
                <div className='link-body-row'>
                <img className='link-body-row' src="https://assets.arkencounter.com/img/tickets/2206-Ark-ComboTicket.jpg" alt="The Arc Encounter"></img>
                </div>
            </div>
            </a>
            <a href='https://www.iheart.com/artist/casting-crowns-89484/' target='_blank' rel='noopener noreferrer'>
            <div className='link-box'>
              <div className='link-head-row center large'>
              Casting Crowns Music
              </div>
              <div className='link-body-row'>
              <img className='link-body-row' src="https://wallpaper4god.com/wallpapers/casting-crowns_947_1280x960.jpg" alt="The Arc Encounter"></img>
              </div>
            </div>
            </a>
            <a href='https://answersingenesis.org/' target='_blank' rel='noopener noreferrer'>
            <div className='link-box'>
              <div className='link-head-row center large'>
              Answers In Genesis
              </div>
              <div className='link-body-row'>
              <img className='link-body-row' src="https://brucegerencser.net/wp-content/uploads/2015/11/answers-in-genesis-sign.jpg" alt="The Arc Encounter"></img>
              </div>
            </div>
            </a>

        </div>

    </div>


  )
}

export default Links