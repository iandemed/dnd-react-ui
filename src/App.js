import React, {useState, useEffect} from 'react'
import './App.css';
import CharacterSheet from './CharacterSheet.js';

function App() {

  const [monsterNames, setMonsterName] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters/")
    .then(res=> res.json())
    .then(data => {
      setMonsterName(data.results)
      setIsLoaded(true)
    })
  }, [])

  /* The page will begin trying to render before we have loaded in all of our monsters,
  therefore if we were to try and reference anything created in the useEffect field we would
  cause the program to craash since it would be undefined on the first render */
  if(!isLoaded){
    return(
      <div className="App">
      <header className="App-header">
        Loading...
      </header>
    </div>
    )
  }
  else{
    return (
      <div className="App">
        <header className="App-header">
          <CharacterSheet name={monsterNames[0].index}/>
        </header>
      </div>
    );
  }
}
export default App;
