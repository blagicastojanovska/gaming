import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { SimpleShareButtons } from 'react-simple-share';
import { HashLink as Link } from 'react-router-hash-link';
import ReactDisqusComments from 'react-disqus-comments';
import { Helmet } from 'react-helmet';

class Gamepage extends Component {
	state = {
		games: [],
		steps: []
	};
	async componentDidMount() {
		let games = await axios.get(
			`https://project3-server.herokuapp.com/posts/${this.props.match.params.id}`
		);
		this.setState({
			games: games.data,
			steps: games.data.steps
		});
	}

	async componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			let games = await axios.get(
				`https://project3-server.herokuapp.com/posts/${this.props.match.params.id}`
			);
			this.setState({
				games: games.data,
				steps: games.data.steps
			});
		}
	}

	render() {
		const style = {
			backgroundImage: `url("images/${this.state.games.image}.png")`,
			backgroundPosition: 'center',
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat'
		};
		return (
			<div className="container">
				<div className="Gamepage">
					<Helmet>
						<title>{this.state.games.title}</title>
						<meta property="og:title" content={this.state.games.title} />
						<meta name="og:description" content={this.state.games.description} />
						<meta
							property="og:image"
							content={`Images/${this.state.games.image}.png`}
						/>
						<meta property="og:type" content="article" />
						<meta name="author" content="Blagica Stojanovska" />
						<meta
							property="og:url"
							content={`https://blagicastojanovska.github.io/gaming/#/game/${this.state.games.image}/`}
						/>
						<meta
							name="base_url"
							content={`https://blagicastojanovska.github.io/gaming/#/game/${this.state.games.image}/`}
						/>
					</Helmet>
					<div className="row">
						<div className="col-md-4 col-sm-4 col-xs-4">
							<div className="game-img" style={style}></div>
						</div>
						<div className="col-md-5 col-sm-6 col-xs-8">
							<h4>
								<span>||||</span> {this.state.games.category}
							</h4>
							<h2>{this.state.games.title}</h2>
							<p>{this.state.games.description}</p>
						</div>
						<div className="col-md-1 col-md-offset-2 col-sm-1 col-sm-offset-1 hidden-xs text-center">
							<Link smooth to="#socialIcons">
								<i className="fa fa-share-alt fa-3x" aria-hidden="true"></i>SHARE
							</Link>
						</div>
					</div>
					<div className="row bg">
						<div className="col-md-10 col-md-offset-1 col-xs-12">
							<div className="row">
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-sm-2 col-xs-12">
											<i className="far fa-clock fa-2x"></i>
										</div>
										<div className="col-md-10 col-sm-9 col-sm-offset-1 col-xs-12">
											<h5 className="hidden-xs">ВРЕМЕНСКА РАМКА</h5>
											<p>{this.state.games.time}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-sm-2 col-xs-12">
											<i className="fa fa-male fa-2x" aria-hidden="true"></i>
										</div>
										<div className="col-md-10 col-sm-9 col-sm-offset-1 col-xs-12">
											<h5 className="hidden-xs">ГОЛЕМИНА НА ГРУПА</h5>
											<p>{this.state.games.players}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-xs-3 p-left">
									<div className="row">
										<div className="col-md-2 col-sm-2 col-xs-12">
											<i className="fab fa-connectdevelop fa-2x"></i>
										</div>
										<div className="col-md-10 col-sm-9 col-sm-offset-1 col-xs-12">
											<h5 className="hidden-xs">ТЕЖИНА</h5>
											<p>{this.state.games.level}</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-xs-3">
									<div className="row">
										<div className="col-md-2 col-sm-2 col-xs-12">
											<i className="far fa-edit fa-2x"></i>
										</div>
										<div className="col-md-10 col-sm-9 col-sm-offset-1 col-xs-12">
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
								<div className="col-md-12">
									{this.state.steps.map((step, i) => {
										return (
											<div key={i} className="row">
												<div className="col-md-9 col-sm-8">
													<h3>{step.step}</h3>
													{step.text.split('\n').map(line => (
														<span key={uuid()}>
															{line}
															<br />
															<br />
														</span>
													))}
													<hr className={step.stepimg !== '' ? 'hidden-xs' : ''} />
												</div>
												{step.stepimg !== '' ? (
													<div className="col-md-3 col-sm-4 col-xs-12 text-center">
														<img
															src={`Stepsimages/${step.stepimg}.png`}
															alt=""
															className="stepimg"
														/>
														<hr className="hidden-lg hidden-md hidden-sm" />
													</div>
												) : null}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<ReactDisqusComments
								shortname="brainsterbox-gaming"
								identifier="brainsterbox-gaming.disqus.com"
								title="Comments"
								url={window.location.href}
							/>
						</div>
					</div>
					<div className="row" id="socialIcons">
						<div className="col-md-12">
							<SimpleShareButtons
								whitelist={['Facebook', 'Twitter', 'LinkedIn', 'Google+']}
								size="40px"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gamepage;
