import React from 'react'
import './CharacterSheet.css'



const Proficiencies = ({type, proficiencies}) => {


    let typeProficiencies = proficiencies.filter( (obj) => {
        return obj.name.includes(type)  
    })

    function prepareProficencies(type, proficiencies){
        

        let monsterProficiencies = ""

        for(let i = 0;  i < proficiencies.length; i++){
            monsterProficiencies += `${proficiencies[i].name.replace(type,'')}+${proficiencies[i].value} `
        }

        return monsterProficiencies.split(0, -1)
    
    }

    if ( typeProficiencies.length === 0){
        return(null)
    }
    else {
        return(

        <div>
           <strong>{type}</strong> {prepareProficencies(type, typeProficiencies)}
        </div>

        )
    }
}


export default Proficiencies