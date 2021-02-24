import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {

		if (isSignedIn) {
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p 
					onClick={() => onRouteChange('signout')} 
					className='f3 pa3 link dim black underline pointer'>
					Sign Out
					</p>
				</nav>
			)
		} else {
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<a 
					onClick={() => onRouteChange('signin')} 
					className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink pointer">
					Sign In
					</a>
					<a 
					onClick={() => onRouteChange('register')} 
					className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink pointer">
					Register
					</a>
				</nav>
			)
		}
	
}

export default Navigation