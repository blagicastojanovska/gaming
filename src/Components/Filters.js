import React, {Component} from 'react';
import {HashLink as Link} from "react-router-hash-link";

class Filters extends Component {
	
	render() {
		return (
			<div className="col-md-12">
				<div className="Filters">
					<div className="row filtersColor">
						<div className="col-md-8">
							<h5>Пребарајте преку категорија</h5>
							<div className="row">
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className="btn-block" onClick={() => this.props.energyClick()}>ЕНЕРГИЈА <span>({this.props.energy})</span></button>
									<button className="btn-block" onClick={() => this.props.actionClick()}>АКЦИЈА <span>({this.props.action})</span></button>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className="btn-block" onClick={() => this.props.inovationClick()}>ИНОВАЦИИ <span>({this.props.inovation})</span></button>
									<button className="btn-block" onClick={() => this.props.teamClick()}>ТИМ <span>({this.props.team})</span></button>
								</div>
								<div className="col-md-4 col-sm-4 col-xs-4">
									<button className="btn-block" onClick={() => this.props.leadingClick()}>ЛИДЕРСТВО <span>({this.props.leading})</span></button>
									<button className="btn-block" onClick={() => this.props.allClick()}>СИТЕ <span>({this.props.all})</span></button>
								</div>
							</div>
						</div>
						<div className="col-md-2 hidden-sm hidden-xs">
							<h5>Временска рамка</h5>
							<div className="row">
								<div className="col-md-6">
									<button className="btn-block" onClick={() => this.props.firstTimeframeClick()}>5-30</button>
									<button className="btn-block" onClick={() => this.props.thirdTimeframeClick()}>60-120</button>
								</div>
								<div className="col-md-6">
									<button className="btn-block" onClick={() => this.props.secondTimeframeClick()}>30-60</button>
									<button className="btn-block" onClick={() => this.props.fourthTimeframeClick()}>120-240</button>
								</div>
							</div>
						</div>
						<div className="col-md-2 hidden-sm hidden-xs">
							<h5>Големина на група</h5>
							<div className="row">
								<div className="col-md-4">
									<button className="btn-block" onClick={() => this.props.firstGroupClick()}>2-10</button>
								</div>
								<div className="col-md-4">
									<button className="btn-block" onClick={() => this.props.secondGroupClick()}>10-40</button>
								</div>
								<div className="col-md-4">
									<button className="btn-block" onClick={() => this.props.thirdGroupClick()}>40+</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-right">
							<h5><Link smooth to="#staffpicks">Препорачани од нашиот тим</Link></h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Filters;
