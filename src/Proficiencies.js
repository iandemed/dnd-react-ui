import React from 'react'
import './CharacterSheet.css'


const prepareProficencies = (type, proficiencies) => {
  let monsterProficiencies = "";
  for(let i = 0;  i < proficiencies.length; i++){
    const proficiency = proficiencies[i].proficiency;
    const value = proficiencies[i].value;
    monsterProficiencies += `${proficiency.name.replace(type,'')} +${value} `;
  }
  return monsterProficiencies.split(0, -1);
}

const Proficiencies = ({type, proficiencies}) => {
  // Proficiencies are an array of objects that contain two properties: proficiency and value
  // see the README for an example of the structure of the proficiency object
  let typeProficiencies = proficiencies.filter( obj => {
    const proficiency = obj.proficiency;
    return proficiency.name.includes(type);
  })
  if ( typeProficiencies.length === 0){
    return null;
  }
  else {
    return(
    <div>
        <strong>{type}</strong> {prepareProficencies(type, typeProficiencies)}
    </div>
    );
  }
}


export default Proficiencies