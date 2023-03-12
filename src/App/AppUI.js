import React, {lazy, Suspense}  from 'react';
import { NavHeader } from '../NavHeader';
// import { RankingContainer } from '../RankingContainer';
import './App.css';
import { GameContext } from '../GameContext';
// import { GenresContainer } from '../GenresContainer';
// import { GenreCard } from '../GenreCard';
import { NewsContainer } from '../NewsContainer';
import { Modal } from '../Modal';
// import { PlatformsContainer } from '../PlatformsContainer';
import { UpcomingContainer } from '../UpcomingContainer';
import { ModalByGame } from '../Modal/modalByGame';
import { GameContain} from '../GameDetail';
// import { Link } from 'react-router-dom';
import { PopularContainer } from '../PopularContainer';
import { MainContain } from '../MainContain';
import { SectionNewsUpcoming } from '../SectionNewsUpcoming';

const LazyGameCard = lazy(() => import('../GameCard'));
const LazyNewsImage = lazy(()=> import ('../NewsCard'));

function AppUI() {
	const {
		// games,
		// genres,
		gamesNews,
		openModal,
		// platforms,
		upComing,
		openModalByGame,
		setOpenModalByGame,
		gameById,
		// goPages,
		popularGames,

	} = React.useContext(GameContext);

	return (
		<>
			<NavHeader />

			<MainContain>
				<PopularContainer className='most-popular-preview'>
					{popularGames && popularGames.map(game =>(
						<Suspense key={game.id} fallback={<div>Cargando...</div>}>
							<LazyGameCard
								className='ranking-img'
								id={game.id}
								name={game.name}
								src={game.background_image}
								setOpenModalByGame={setOpenModalByGame}
							/>
						</Suspense>
					))}
				</PopularContainer>

				<SectionNewsUpcoming>
					<NewsContainer>
						{gamesNews && gamesNews.map(game =>(
							<Suspense key={game.title} fallback={<div className="skeleton">Cargando...</div>}>
								<LazyNewsImage							
									name={game.title}
									src={game.image}
									url={game.link}
									date={game.date}
									description={game.description}
								/>
							</Suspense>
						))}
					</NewsContainer>
					<UpcomingContainer>
						{upComing && upComing.map(game =>(
							<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
								<LazyGameCard
									className='upcoming-img'
									id={game.id}
									name={game.name}
									src={game.background_image}
									setOpenModalByGame={setOpenModalByGame}
								/>

		  </Suspense>
						))}
					</UpcomingContainer>
				</SectionNewsUpcoming>
				
			</MainContain>
			{/* <RankingContainer>

				{games && games.map(game =>(
					<Suspense key={game.id} fallback={<div>Cargando...</div>}>
						<LazyGameCard
							className='ranking-img'
							id={game.id}
							name={game.name}
							src={game.background_image}
							setOpenModalByGame={setOpenModalByGame}
						/>

		  </Suspense>
				))}
			</RankingContainer> */}



			{/* <PlatformsContainer>
				{platforms && platforms.map(platforms =>(
					<Link key={platforms.id} to='/genres' onClick={goPages}>
						<GenreCard 
							genreName= {platforms.name}
							name={platforms.name} />
					</Link>
				))}
			</PlatformsContainer> */}

			{!!openModal && (
				<Modal>
					{/* <GenresContainer>
						{genres && genres.map(genre =>(

							<Link key={genre.id} to='/genres' onClick={goPages}>
								<GenreCard 
									genreName= {genre.name}
									name={genre.name} />
							</Link>
						))
						}
					</GenresContainer> */}
				</Modal>
			)}
			
			{!!openModalByGame && gameById &&
			 <ModalByGame>

			 	{gameById && <GameContain
				
			 		id={gameById.id}
			 		name={gameById.name}
			 		released = {gameById.released}
			 		src={gameById.background_image}
			 		description={gameById.description}
			 		rating={gameById.rating}
			 	/>};
		
			 </ModalByGame>
			}	
		</>

	);
}


export {AppUI};