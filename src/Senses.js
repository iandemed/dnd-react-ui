import React from 'react'
import './CharacterSheet.css'

const prepareSenses = (types, values) => {

  let monsterSenses = ""
  for (let i = 0; i < types.length; i++){
    if (types[i] === "passive_perception") {
      monsterSenses += `passive Perception ${values[i]},`;
    } else {
      monsterSenses += `${types[i]} ${values[i]}, `;
    }
  }
  return monsterSenses.slice(0,-1);
}


const Senses = ({types, values}) => {
  if (types.length === 0){
    return null;
  }
  else {
    return(
      <div>
        <strong>Senses:</strong> {prepareSenses(types, values)}
      </div>
    );
  }
}


export default Senses;