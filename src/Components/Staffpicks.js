import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Staffpick from './Staffpick.js';
import { Link } from 'react-router-dom';

const Staffpicks = props => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const result = await axios('https://project3-server.herokuapp.com/posts');

		setGames(
			result.data.filter(
				game =>
					result.data[2].id === game.id ||
					result.data[13].id === game.id ||
					result.data[20].id === game.id ||
					result.data[41].id === game.id
			)
		);
	};

	return (
		<div className="Staffpicks" id="staffpicks">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h4>Препорачани од нашиот тим</h4>
						<hr className="smallerHr" />
						<hr />
					</div>
				</div>
				<div className="row">
					{games.map(game => (
						<Link to={`/Gamepage/${game.id}`} key={game.id}>
							<Staffpick
								key={game.id}
								title={game.title}
								category={game.category}
								bgImg={{
									backgroundImage: `url(${require(`../assets/img/img-cards/${game.image}.png`)})`
								}}
								description={game.description}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Staffpicks;
