import React, { useState, useEffect } from "react";
import axios from "axios";
import StaffpickItem from "./StaffpickItem.js";

const Staffpicks = () => {
  const [staffPicks, setStaffPicks] = useState([]);

  useEffect(() => {
    getStaffPicks();
  }, []);

  const getStaffPicks = async () => {
    const result = await axios("https://project3-server.herokuapp.com/posts");

    setStaffPicks(
      result.data.filter(
        (game) =>
          result.data[2].id === game.id ||
          result.data[13].id === game.id ||
          result.data[20].id === game.id ||
          result.data[41].id === game.id
      )
    );
  };

  return (
    <div className="Staffpicks" id="staffpicks">
      <div className="inner-wrap">
        <h2 className="block-title">Препорачани од нашиот тим</h2>
        <hr />
        <div className="grid-container">
          {staffPicks.map((game) => (
            <StaffpickItem
              key={game.id}
              title={game.title}
              category={game.category}
              id={game.id}
              img={require(`../../assets/img/img-cards/${game.image}.png`)}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staffpicks;
