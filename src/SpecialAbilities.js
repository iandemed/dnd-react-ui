import React from 'react'
import './CharacterSheet.css'



const SpecialAbilities = ({abilities}) => {

    if (abilities === null){
        return(null)
    }
    else {
        return(
            <div className="Special-abilities">
            {
            abilities.map((ability) => { 
                return(
                    <div className="ability">
                        <p>
                            <strong>{ability.name}</strong> 
                        </p>
                        <p>
                            {ability.desc}
                        </p>
                    </div>
                )
            })
            }
            </div>

        )
    }
}


export default SpecialAbilities