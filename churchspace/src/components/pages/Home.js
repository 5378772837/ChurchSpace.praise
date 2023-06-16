import React from 'react'
import '../../css/pages/home.css'
import '../../css/reusables/positions.css'

function Home() {
  
  return (
    
    <div className='flex-col background fill center'>
      <div className='message-col justify-content-center'>
        <div className='flex-row center xl'>Welcome to our Church Space!</div>
        <div className='flex-row center large'>A site dedicated solely to members of our church!</div>
      
        {/* <h1 className='flex-row center'>Welcome to Performance Dog Registry!</h1>
        <h2 className='flex-row center'>Where all dogs registered are proven working dogs!</h2> */}
        </div>
      <div className='body-row'></div>

    </div>


  )
}

export default Home