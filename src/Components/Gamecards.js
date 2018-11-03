
import React, {Component} from 'react';
import axios from "axios";
import Card from "./Card.js"
import Filters from "./Filters.js"
import {Link} from "react-router-dom"
class Gamecards extends Component {
	state = {
		games: [],
		separateGames: []
	}

	async componentDidMount(){
		var games = await axios.get("https://json-brainsterbox.herokuapp.com/posts");
		this.setState({
			games: games.data,
			separateGames: games.data
		})
	}

	showEnergy = () => {
		const energy = (this.state.games.filter(game => game.category === "Енергија"));
		this.setState({
			separateGames: energy
		})
	} 
	showAction = () => {
		const action = (this.state.games.filter(game => game.category === "Акции"));
		this.setState({
			separateGames: action
		})
	} 
	showInovation = () => {
		const inovation = (this.state.games.filter(game => game.category === "Иновации"));
		this.setState({
			separateGames: inovation
		})
	} 
	showLeading = () => {
		const leading = (this.state.games.filter(game => game.category === "Лидерство"));
		this.setState({
			separateGames: leading
		})
	} 
	showTeam = () => {
		const team = (this.state.games.filter(game => game.category === "Тим"));
		this.setState({
			separateGames: team
		})
	} 
	showAll = () => {
		this.setState((prevState) => {
			return{
			separateGames: prevState.games
			 }
		})
	}
	showFirstTimeframe = () => {
		const FirstTimeframe = (this.state.games.filter(game => game.time === "5-30 минути"));
		this.setState({
			separateGames: FirstTimeframe
		})
	}
	showSecondTimeframe = () => {
		const SecondTimeframe = (this.state.games.filter(game => game.time === "30-60 минути"));
		this.setState({
			separateGames: SecondTimeframe
		})
	}
	showThirdTimeframe = () => {
		const ThirdTimeframe = (this.state.games.filter(game => game.time === "60-120 минути"));
		this.setState({
			separateGames: ThirdTimeframe
		})
	}
	showFourthTimeframe = () => {
		const FourthTimeframe  = (this.state.games.filter(game => game.time === "120-240 минути"));
		this.setState({
			separateGames: FourthTimeframe 
		})
	}
	showFirstGroup = () => {
		const FirstGroup = (this.state.games.filter(game => game.players === "2-10"));
		this.setState({
			separateGames: FirstGroup 
		})
	}
	showSecondGroup = () => {
		const SecondGroup = (this.state.games.filter(game => game.players === "10-40"));
		this.setState({
			separateGames: SecondGroup 
		})
	}
	showThirdGroup = () => {
		const ThirdGroup = (this.state.games.filter(game => game.players === "2-40+" || game.players === "10-40+"));
		this.setState({
			separateGames: ThirdGroup 
		})
	}
	



	render() {
		return (
			<div className="Gamecards">
				<div className="container">
					<div className="row">
						<Filters all={this.state.games.length} 
						energy={this.state.games.filter(game=> game.category === "Енергија").length}
						action={this.state.games.filter(game=> game.category === "Акции").length}
						inovation={this.state.games.filter(game=> game.category === "Иновации").length}
						leading={this.state.games.filter(game=> game.category === "Лидерство").length}
						team={this.state.games.filter(game=> game.category === "Тим").length}
						energyClick={this.showEnergy}
						actionClick={this.showAction}
						inovationClick={this.showInovation}
						leadingClick={this.showLeading}
						teamClick={this.showTeam} 
						allClick={this.showAll}
						firstTimeframeClick={this.showFirstTimeframe} 
						secondTimeframeClick={this.showSecondTimeframe}
						thirdTimeframeClick={this.showThirdTimeframe}
						fourthTimeframeClick={this.showFourthTimeframe}
						firstGroupClick={this.showFirstGroup} 
						secondGroupClick={this.showSecondGroup} 
						thirdGroupClick={this.showThirdGroup} />
					</div>
					<div className="row">
						{this.state.separateGames.map(game => {
							const style = {
								backgroundImage: `url("images/${game.image}.png")`
							}
							return (<Link to={`/Gamepage/${game.id}`} key={game.id}><Card key={game.id} title={game.title} category={game.category}
							 style={style} time={game.time} players={game.players}/></Link>)
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Gamecards;
