import React, {useState, useEffect} from 'react'
import './App.css';
import CharacterSheet from './CharacterSheet.js';


const MonsterAccorion = ({name, index}) => {

    const [isActive, setActive] = useState(false)

    return(
        <div>
            <div className = {`accordion-header ${isActive ? "active" : ""}`} 
            onClick = {() => {setActive(!isActive)}}>
            <h1>{name}</h1>
            </div>
            <div className = {`accordion-content ${isActive ? "active" : ""}`}>
            {
                prepareCharacterSheet(isActive, index)
            }
            </div>
        </div>
    )
}


const prepareCharacterSheet = (isActive, index) => {
    if(isActive){
      return(
        <CharacterSheet index={index}/>
      )
    } else{
      return null
    }
}

export default MonsterAccorion

