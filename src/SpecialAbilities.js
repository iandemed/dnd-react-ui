import React from 'react';
import './CharacterSheet.css';

const SpecialAbilities = ({abilities}) => {
  if (abilities === null){
    return null;
  }
  else {
    return(
      <div className="Special-abilities">
      {// Loop over the various non-combat related abilites for
       // each monster
        abilities.map((ability, index) => { 
          return(
            <div 
              className="ability"
              key={index}
            >
              <p>
                <strong>{ability.name}</strong> 
              </p>
              <p>
                {ability.desc}
              </p>
            </div>
          );
      })}
      </div>
    );
  }
};

export default SpecialAbilities;