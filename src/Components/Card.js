import React from 'react';

const Card = (props) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-6 text-center">
    	<div className="Card">
    		<div className="image-div" style={props.style}></div>
	    	<h3>{props.title}</h3>
	    	<p>{props.category}</p>
	    	<p className="hoverDescription"><span className="m-right"><i className="far fa-clock"></i> {props.time}</span><span><i className="fas fa-male"></i> {props.players}</span></p>
    	</div>
    </div>
  )
}

export default Card;