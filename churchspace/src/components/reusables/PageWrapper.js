import React from 'react'
import Header from './Header'
import Footer from './Footer'

function PageWrapper(props) {
	return (
		<div className='flex-col container'>
		<div className='flex-row header sticky'>
			  <Header user={props.user} setUser={props.setUser}/>
		  </div>
		  <div className='flex-row page fill'>
			{props.children}
		  </div>
		  <div className='flex-row'>
			  <Footer user={props.user} setUser={props.setUser}/>
		  </div>
		</div>
	  )
}

export default PageWrapper