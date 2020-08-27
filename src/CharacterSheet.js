import React, {useState, useEffect} from 'react'

const CharacterSheet = ({index}) => {

    const [monster, setMonster] = useState({})

    /* Add a useEffect hook with an empty dependency array to prevent infinite callbacks */
    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/monsters/" + index)
        .then(res=> res.json())
        .then(setMonster)
    }, [])

    
            
    return(

        <div className = "Character-sheet">
            <button>{monster.name}</button>
        </div>

    )
}

export default CharacterSheet