import React from 'react'

const StatBlock = ({str, dex, con, int, wis, cha}) => {

    const abilityModifier = (ability) => {
        return Math.floor((ability-10)/2)
    }

    return(

        <div className = "StatBlock">
            <h2>STR</h2>
            <h2>DEX</h2>
            <h2>CON</h2>
            <h2>INT</h2>
            <h2>WIS</h2>
            <h2>CHA</h2>
            
            <p>{str}</p>
            <p>{dex}</p>
            <p>{con}</p>
            <p>{int}</p>
            <p>{wis}</p>
            <p>{cha}</p>
            
            <p>{abilityModifier(str)}</p>
            <p>{abilityModifier(dex)}</p>
            <p>{abilityModifier(con)}</p>
            <p>{abilityModifier(int)}</p>
            <p>{abilityModifier(wis)}</p>
            <p>{abilityModifier(cha)}</p>
            
        </div>

    )
}

export default StatBlock