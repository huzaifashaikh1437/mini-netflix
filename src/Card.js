import React from "react";
import "./Card.css";


function Card(props) {
  return (
    <div className="cards">
      <div className="poster">
        <img src={props.poster} alt="poster"></img>
      </div>

      <div className="info">
        <h3>{props.title}</h3>
        <p>Original Netflix Series</p>
        <button>
          <a href={props.link} target="blank">
            Watch Now
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;