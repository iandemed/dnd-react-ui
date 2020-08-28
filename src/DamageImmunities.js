import React from 'react'
import './CharacterSheet.css'



const DamageImmunities = ({damage}) => {

    function prepareDamageImmunities(damage){

        let monsterImmunities = ""

        for (let i = 0; i < damage.length; i++){

            if(i === 0){
                monsterImmunities += `${damage[i]}`
            } else if(damage[i].includes(',')){
                monsterImmunities += `; ${damage[i]}`
            } else{
                monsterImmunities += `, ${damage[i]}`
            }
        }
        
        return monsterImmunities
    
    }

    if (damage.length === 0){
        return(null)
    }
    else {
        return(

        <div className = {`maroon`}>
           <strong>Damage Immunities:</strong> {prepareDamageImmunities(damage)}
        </div>

        )
    }
}


export default DamageImmunities