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

const Speed = ({types, values}) => {
  return(
    <div>
      <strong>Speed:</strong> {prepareSpeed(types, values)}
    </div>
  );
};


export default Speed;