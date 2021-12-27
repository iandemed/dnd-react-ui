import React from 'react';
import './CharacterSheet.css';

const prepareSpeed = (types, values) => {

  let monsterSpeed = "";
  for (let i = 0; i < types.length; i++){
    if (types[i] === "walk"){
      monsterSpeed += `${values[i]}`;
    } else {
      monsterSpeed += `, ${types[i]} ${values[i]}`;
    }
  }
  return monsterSpeed;
};

const LineItem = ({stat, types, values}) => {
  return(
    <div className = {`maroon`}>
      <strong>Speed:</strong> {eval(`prepare${stat}(types, values)`)}
    </div>
  );
}

export default LineItem;