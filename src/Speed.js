import React, {useState, useEffect} from 'react'
import './CharacterSheet.css'



const Speed = ({types, values}) => {

    function prepareSpeed(types, values){

        let monsterSpeed = ""
    
        for (let i = 0; i < types.length; i++){
            if (types[i] === "walk"){
                monsterSpeed += `${values[i]}`
            } else {
    
                monsterSpeed += `, ${types[i]} ${values[i]}`
            }
        }
    
        return monsterSpeed
    
    }

    return(

        <div className = {`maroon`}>
           <strong>Speed:</strong> {prepareSpeed(types, values)}
        </div>

    )
}


export default Speed