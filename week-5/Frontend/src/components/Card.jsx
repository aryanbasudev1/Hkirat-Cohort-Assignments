import React from "react";
import "./Cards.css";

function Card(props) {
   function openProfile(url){
        window.open(url , '_blank')
    }
  return (
    <div id="container">
      <div id="title">{props.name}</div>

      <div id="about">A {props.id} in the 100xDevs Cohort 2.0</div>

      <div id="interest">
        <div id="interestsHeader">Interests</div>
            <ul id='interestsList'>     
            {props.interests.map((interest) => (
                <li key={interest} id="interestItem">
                    {interest}
                </li>
                ))}
            </ul>
      </div>

      <div id="buttons">
        <button id="button1" onClick={() => openProfile(props.linkedIn)}>LinkedIn</button>
        <button id="button2" onClick={() => openProfile(props.x)}>X</button>
      </div>
    </div>
  );
}

export default Card;
