import React, {useState, useEffect} from 'react'
import './App.css';
import CharacterSheet from './CharacterSheet.js';

function App() {

  const [monsterNames, setMonsterName] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters/")
    .then(res=> res.json())
    .then(monsterData => {
      setMonsterName(monsterData.results)
      setIsLoaded(true)
    })
  }, [])


  console.log(monsterNames)

  /* The page will begin trying to render before we have loaded in all of our monsters,
  therefore if we were to try and reference anything created in the useEffect field we would
  cause the program to craash since it would be undefined on the first render */
  if(!isLoaded){
    return(
      <div className="App">
      <header className="App-header">
        <h1>5th Edition SRD Monster Character Sheets</h1>
      </header>

      Loading...

    </div>
    )
  }
  else{
    return (
      <div className="App">
        <header className="App-header">
          <h1>5th Edition SRD Monster Character Sheets</h1>
        </header>
        <div className="container">
          {
              monsterNames.map((monster) => {
                console.log(monster.index)
                return <CharacterSheet index={monster.index}/>
              })
          }
        </div>
      </div>
    );
  }
}
export default App;
