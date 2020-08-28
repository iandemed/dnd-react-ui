import React from 'react'
import './CharacterSheet.css'



const Proficiencies = ({type, proficiencies}) => {

    function prepareProficencies(type, proficiencies){
        
        let typeProficiencies = proficiencies.filter( (obj) => {
  
            return obj.name.includes(type)
            
        })

        let monsterProficiencies = ""

        for(let i = 0;  i < typeProficiencies.length; i++){
            monsterProficiencies += `${typeProficiencies[i].name.replace(type,'')}+${typeProficiencies[i].value} `
        }

        return monsterProficiencies.split(0, -1)
    
    }

    if (proficiencies.length === 0){
        return(null)
    }
    else {
        return(

        <div>
           <strong>{type}</strong> {prepareProficencies(type, proficiencies)}
        </div>

        )
    }
}


export default Proficiencies