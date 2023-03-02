import React, {createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useGameRanking } from './useGameRanking';
import { useGenres } from './useGamesGenres';
import { useGamesNews } from './useGamesNews';
import { usePlatformsGames } from './usePlatformsGames';
import { useUpcoming } from './useUpcomingGames';
import {useGamesByGenre} from './useGamesByGenre';
import { useGameById } from './useGameById';

const GameContext = createContext();

function GameProvider(props){
	const {games} = useGameRanking();
	const {genres} = useGenres();
	const {gamesNews} = useGamesNews();
	const {platforms} = usePlatformsGames();
	const[openModal, setOpenModal] = useState(false);
	const[openModalByGame, setOpenModalByGame] = useState(false);
	const {upComing} = useUpcoming();
	const [id, setId] = useState(null);
	const getId = (select) =>setId(select);
	
	const {gameById} = useGameById(id);
	console.log(gameById);
	const [page, setPage] = useState('');
	console.log(games);

	const getPage = (select) =>setPage(select);

	const {gamesByGenre} = useGamesByGenre(page);

	function goPages(e) {
		const name = e.target.textContent.toLowerCase();
		const nameJoined = () =>{
			const words = name.split(' ');
			return words.length > 1 ? words.join('-') : name;
		};
		getPage(nameJoined);
	}
	return(
		<GameContext.Provider value={{
			games, 
			genres, 
			gamesNews,
			openModal,
			setOpenModal,
			platforms,
			upComing,
			gamesByGenre,
			page,
			goPages,
			openModalByGame,
			setOpenModalByGame,
			gameById,
			getId,
		}}>
			{props.children}
		</GameContext.Provider>
		
	);
}

GameProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export {GameContext, GameProvider};