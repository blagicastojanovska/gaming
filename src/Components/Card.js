import React from 'react';

const Card = ({ style, title, category, time, players }) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-6 text-center">
      <div className="Card">
        <div className="image-div" style={style}></div>
        <h3>{title}</h3>
        <p>{category}</p>
        <p className="hoverDescription">
          <span className="m-right">
            <i className="far fa-clock"></i> {time}
          </span>
          <span>
            <i className="fas fa-male"></i> {players}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
