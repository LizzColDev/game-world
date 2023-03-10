import React from 'react';
import { NavList } from '../NavList';
import { NavTitleLogo } from '../NavTitleLogo';
import './styles.css';

function NavHeader(){
	return(
		<><header>
			<nav>
				<NavTitleLogo className='nav-header'/>
				<NavList className='links-nav'  />
			</nav>
		</header>

		</>
	);
}

export {NavHeader};