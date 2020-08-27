import React, {useState, useEffect} from 'react'
import './CharacterSheet.css'

const CharacterSheet = ({index}) => {

    const [monster, setMonster] = useState({})
    const [isActive, setActive] = useState(false)
    const [isLoaded, setLoaded] = useState(false)


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
                <div className = {`accordion-header ${isActive ? "active" : ""}`}>
                    <h1>{monster.name}</h1>
                </div>
                <div className = {`accordion-content ${isActive ? "active" : ""}`}>
                    TEST
                </div>
            </div>


        )
    } else{
        return null
    }
}

export default CharacterSheet