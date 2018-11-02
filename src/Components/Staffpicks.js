
import React, {Component} from 'react';
import axios from "axios";
import Staffpick from "./Staffpick.js"
import {Link} from "react-router-dom";

class Staffpicks extends Component {
	state = {
		games: []
	}

	async componentDidMount(){
		var games = await axios.get("http://localhost:3001/games");
		this.setState({
			games: games.data.filter((game) => {
				return (
					games.data[2].id === game.id ||
					games.data[13].id === game.id ||
					games.data[20].id === game.id ||
					games.data[41].id === game.id
				)
			})
		})
	}

	render() {
		return (
			<div className="Staffpicks" id="staffpicks">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h4>Препорачани од нашиот тим</h4>
							<hr className="smallerHr"/>
							<hr/>
						</div>
					</div>
					<div className="row">
						{this.state.games.map(game => {
							const style = {
								backgroundImage: `url("/images/${game.image}.png")`,
								backgroundPosition: "center",
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat"
							}
							return (<Link to={`/Gamepage/${game.id}`} key={game.id}><Staffpick key={game.id} title={game.title} category={game.category}
							 style={style} description={game.description}/></Link>)
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Staffpicks;
