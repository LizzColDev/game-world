import React from 'react';
import PropTypes from 'prop-types';
import './RankingCotainer.css';
import { Link } from 'react-router-dom';

function RankingContainer(props){
	return(
		<section className='rankingGames-container' id='ranking'>
			<div className='ranking-header'>
				<h2 className='ranking-title'>Ranking</h2>
				<Link to={'/ranking-games'}>
					<button className='ranking-btn btn'>See more</button>

				</Link>
			</div>
			<article className='games-contain'>
				{props.children}
			</article>
		</section>
	);
}
RankingContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
  
export {RankingContainer};