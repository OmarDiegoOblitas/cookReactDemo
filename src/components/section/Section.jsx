import React from "react";
import image from "../../image/cookie.jpg";
import image1 from "../../image/cookie1.jpg";
import image2 from "../../image/cookie2.jpg";
import image3 from "../../image/cookie3.jpg";
import {MdDeliveryDining} from"react-icons/md"
import {BiTimer} from"react-icons/bi"
import "./Section.css";

function Products() {
  const cards = [
    {
      image: image,
      name: "ChipsAhyos",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe corrupti, tenetur ",
      cost: "20 $",
    },
    {
      image: image1,
      name: "Oreo",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe corrupti, tenetur ",
      cost: "16 $",
    },
    {
      image: image2,
      name: "donut",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe corrupti, tenetur ",
      cost: "15 $",
    },
    {
      image: image3,
      name: "lazy",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe corrupti, tenetur ",
      cost: "10 $",
    },
  ];
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <article key={index}className="cards-content">
          <img src={card.image} alt="public-image" className="card-image" />
          <h3>{card.name}</h3>
          <p>{card.info}</p>
        <div className="details-delivery">
          <BiTimer/>
          <p>30 min</p>
          <MdDeliveryDining/>
        </div>
          <button className="button-card"> {card.cost}</button>
        </article>
      ))}
    </div>
  );
}
export default Products;
