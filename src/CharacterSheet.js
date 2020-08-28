import React, {useState, useEffect} from 'react'
import './CharacterSheet.css'
import StatBlock from './StatBlock.js'
import Speed from './Speed.js'
import ConditionImmunities from './ConditionImmunities'
import DamageImmunities from './DamageImmunities'
import Proficiencies from './Proficiencies'
import Senses from './Senses'
import SpecialAbilities from "./SpecialAbilities"

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
                <div className = {`accordion-header ${isActive ? "active" : ""}`}
                    onClick = {() => {setActive(!isActive)}}>
                    <h1>{monster.name}</h1>
                    <h1>{`CR ${monster.challenge_rating}`}</h1>
                </div>
                <div className = {`accordion-content ${isActive ? "active" : ""}`}>
                
                    <div className='typeline'>
                        <em>{monster.size} {monster.type} {(monster.subtype) ? monster.subtype : ''}, {monster.alignment}</em>
                    </div>
                    <div className = "primary-stats maroon">
                        <div>
                            <strong>Armor Class</strong> {monster["armor_class"]}
                        </div>
                        <div>
                            <strong>Hit Points</strong> {monster["hit_points"]} ({monster["hit_dice"]})
                        </div>

                        <Speed types = {Object.keys(monster.speed)} values = {Object.values(monster.speed)} />
                    </div> 
                    <StatBlock 
                        str={monster.strength}
                        dex={monster.dexterity}
                        con={monster.constitution}
                        int={monster.intelligence}
                        wis={monster.wisdom}
                        cha={monster.charisma}
                    
                    />
                    <div className = "secondary-stats maroon">
                        <Proficiencies type = "Skill" proficiencies = {monster['proficiencies']}/>
                        <Proficiencies type = "Saving Throw:"proficiencies = {monster['proficiencies']}/>
                        <DamageImmunities damage = {monster['damage_immunities']}/>
                        <ConditionImmunities conditions = {monster['condition_immunities']}/>
                        <Senses types = {Object.keys(monster.senses)} values = {Object.values(monster.senses)}/>
                    </div>
                    <SpecialAbilities abilities = {monster.hasOwnProperty('special_abilities') ? monster['special_abilities'] : null}/>
                </div>
            </div>


        )
    } else{
        return null
    }
}

export default CharacterSheet