import React from "react";
import Card from "./Cards";
import img1 from "./images/novice.png";
import img2 from "./images/university.png";
import img3 from "./images/gamer.png";

const card = [
  { id: 1, title: "Novice", image: img1 },

  { id: 2, title: "University", image: img2 },

  { id: 3, title: "Gamer", image: img3 },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center bg-info">
      <div className="row">
        {card.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageURL={card.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
