import React from 'react';

const Staffpick = props => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <div className="Staffpick">
        <div className="staff-image-div" style={props.style}></div>
        <h4>
          <span>|||</span>
          {props.category}
        </h4>
        <h3>{props.title}</h3>
        <div className="description-div">
          <p>{props.description}</p>
        </div>
        <div className="text-center m-top">
          <button>ПРОЧИТАЈ ПОВЕЌЕ</button>
        </div>
      </div>
    </div>
  );
};

export default Staffpick;
