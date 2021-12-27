import React, {useState} from 'react'
import './App.css';
import CharacterSheet from './CharacterSheet.js';

const prepareCharacterSheet = (isActive, index) => {

  if(isActive){
    return(<CharacterSheet index={index}/>);
  } else{
    return null;
  }
}

const MonsterAccorion = ({name, index}) => {

  const [isActive, setActive] = useState(false);
  return(
    <div key={index}>
      <div 
        className ={`accordion-header ${isActive ? "active" : ""}`}
        onClick = {() => {setActive(!isActive)}}
      >
        <h1>{name}</h1>
      </div>
      <div className = {`accordion-header ${isActive ? "active" : ""}`}>
        {prepareCharacterSheet(isActive, index)}
      </div>
    </div>
  );
}

export default MonsterAccorion;

