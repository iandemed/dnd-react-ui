import React from 'react'
import './CharacterSheet.css'


const prepareConditionImmunities = (conditions) => {
  let monsterImmunities = "";
  conditions.forEach((condition) =>{
      monsterImmunities += `${condition.name}, `
  });
  
  return monsterImmunities.slice(0,-2);
};

const ConditionImmunities = ({conditions}) => {
  if (conditions.length === 0){
      return null;
  } else {
    return(
      <div className = {`maroon`}>
          <strong>Condition Immunities:</strong> {prepareConditionImmunities(conditions)}
      </div>
    );
  }
};

export default ConditionImmunities;