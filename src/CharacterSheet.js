import React, {useState, useEffect} from 'react'

const CharacterSheet = ({name}) => {

    const [monster, setMonster] = useState({})

    /* Add a useEffect hook with an empty dependency array to prevent infinite callbacks */
    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/monsters/" + name)
        .then(res=> res.json())
        .then(setMonster)
    }, [])

    
            
    return(

        <div className = "Character-sheet">
            <button>{monster.type}</button>
        </div>

    )
}

export default CharacterSheet