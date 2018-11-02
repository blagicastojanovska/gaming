
import React, {Component} from 'react';
import axios from "axios";
import uuid from "uuid";

class Gamepage extends Component {
	state = {
		games: [],
		steps: [],
		stepsimg: []
	}
	async componentDidMount(){
		let games = await axios.get(`http://localhost:3001/games/${this.props.match.params.id}`);
		this.setState({
			games: games.data,
			steps: games.data.steps,
			stepsimg: games.data.stepsimg
		})
	}

	async componentDidUpdate(prevProps){
		if (this.props.location !== prevProps.location) {
			let games = await axios.get(`http://localhost:3001/games/${this.props.match.params.id}`);
			this.setState({
				games: games.data,
				steps: games.data.steps,
				stepsimg: games.data.stepsimg
			})
		} 		
	}

	render() {
		const style = {
			backgroundImage: `url("/images/${this.state.games.image}.png")`,
			backgroundPosition: "center",
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat"
		}
		return (
			<div className="container">
				<div className="Gamepage">
					<div className="row">
						<div className="col-md-4 col-sm-4 col-xs-4">
							<div className="game-img" style={style}>	
							</div>
						</div>
						<div className="col-md-5 col-sm-6 col-xs-8">
							<h4><span>||||</span> {this.state.games.category}</h4>
							<h2>{this.state.games.title}</h2>
							<p>{this.state.games.description}</p>
						</div>
						<div className="col-md-1 col-md-offset-2 col-sm-1 col-sm-offset-1 hidden-xs text-center">
							<a href="/"><i className="fa fa-share-alt fa-3x" aria-hidden="true"></i>SHARE</a>
						</div>
					</div>
					<div className="row bg">
						<div className="col-md-10 col-md-offset-1 col-xs-12">
							<div className="row">
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-xs-12">
											<i className="far fa-clock fa-2x"></i>
										</div>
										<div className="col-md-10 col-xs-12">
											<h5 className="hidden-xs">ВРЕМЕНСКА РАМКА</h5>
											<p>{this.state.games.time}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-xs-12">
											<i className="fa fa-male fa-2x" aria-hidden="true"></i>
										</div>
										<div className="col-md-10 col-xs-12">
											<h5 className="hidden-xs">ГОЛЕМИНА НА ГРУПА</h5>
											<p>{this.state.games.players}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-xs-3 p-left">
									<div className="row">
										<div className="col-md-2 col-xs-12">
											<i className="fab fa-connectdevelop fa-2x"></i>
										</div>
										<div className="col-md-10 col-xs-12">
											<h5 className="hidden-xs">ТЕЖИНА</h5>
											<p>{this.state.games.level}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-xs-12">
											<i className="far fa-edit fa-2x"></i>
										</div>
										<div className="col-md-10 col-xs-12">
											<h5 className="hidden-xs">МАТЕРИЈАЛИ</h5>
											<p>{this.state.games.materials}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
							<div className="row">
								<div className="col-md-8">
									{this.state.steps.map ( (step, i) => {
										return (
											<div key={i}>
												<h3>{step.step}</h3>
												{step.text.split("\n").map(row => (
													<span key={uuid()}>{row} <br/><br/></span>
												))}
									 			<hr/>
									 		</div>
									 	)
								 	})}
								</div>
								<div className="col-md-4">
									 {this.state.stepsimg.map ( (stepimg, i) => {
									 	const style = {
									 		backgroundImage: `url("${stepimg}.png")`
									 	}
									 	return (
									 		<div key={i} style={style}>
									 		</div>
									 	)
									 })}
								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gamepage;
