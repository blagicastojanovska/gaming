import React from 'react';

const Staffpick = ({ bgImg, category, title, description }) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <div className="Staffpick">
        <div className="staff-image-div" style={bgImg}></div>
        <h4>
          <span>|||</span>
          {category}
        </h4>
        <h3>{title}</h3>
        <div className="description-div">
          <p>{description}</p>
        </div>
        <div className="text-center m-top">
          <button>ПРОЧИТАЈ ПОВЕЌЕ</button>
        </div>
      </div>
    </div>
  );
};

export default Staffpick;
