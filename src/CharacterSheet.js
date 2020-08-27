import React, {useState, useEffect} from 'react'
import './CharacterSheet.css'
import StatBlock from './StatBlock'

const CharacterSheet = ({index}) => {

    const [monster, setMonster] = useState({})
    const [isActive, setActive] = useState(false)
    const [isLoaded, setLoaded] = useState(false)
    const [monsterStats, setMonsterStats] = useState({})

    /* Add a useEffect hook with an empty dependency array to prevent infinite callbacks */
    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/monsters/" + index)
        .then(res=> res.json())
        .then(monsterData => {
            setMonster(monsterData)
            setLoaded(true)
        })
    }, [])

    
    if (isLoaded){

        return(

            <div className = "monster-wrapper">
                <div className = {`accordion-header ${isActive ? "active" : ""}`}
                    onClick = {() => {setActive(!isActive)}}>
                    <h1>{monster.name}</h1>
                    <h1>{`CR ${monster.challenge_rating}`}</h1>
                </div>
                <div className = {`accordion-content ${isActive ? "active" : ""}`}>
                    <StatBlock 
                        str={monster.strength}
                        dex={monster.dexterity}
                        con={monster.constitution}
                        int={monster.intelligence}
                        wis={monster.wisdom}
                        cha={monster.charisma}
                    
                    />
                </div>
            </div>


        )
    } else{
        return null
    }
}

export default CharacterSheet