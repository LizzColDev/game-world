import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './GameCard.css';
import { GameContext } from '../../../GameContext/GameProvider';
import { useIntersectionObserver } from '../../../GameContext/useIntersectionObserver';

function GameCard({className, ...props}){
	const {getId, setOpenModalByGame} =useContext(GameContext);

	const {imgRef, loaded} = useIntersectionObserver(props);

	const onClickButton = (e) => {
		const idGame = e.target.id;
		getId(idGame);
		setOpenModalByGame(prevState => !prevState);
	};

	return (
		<div key={props.id} className={className}>
			
			<img
				className={`img-card ${loaded ? 'loaded' : 'skeleton'}`}
				id={props.id}
				name={props.name}
				ref={imgRef}
				src={props.src}
				loading="lazy"
				onClick={onClickButton}
			/>
			

			<h3 alt={props.name} className="name-game">{props.name} </h3>
			
		</div>
	);
}

GameCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node,
	setOpenModalByGame: PropTypes.func,
	className: PropTypes.string
};
export default GameCard;