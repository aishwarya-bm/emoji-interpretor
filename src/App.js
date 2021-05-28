import { useState } from 'react';
import './App.css';

const emojis = {
  '🤣' : 'Rolling on the Floor Laughing',
  '😂' : 'Face with Tears of Joy',
  '🙂' : 'Slightly Smiling Face',
  '😉' :'Winking Face',
  '😊': 'Smiling Face with Smiling Eyes',
  '😙' : 'Kissing Face with Smiling Eyes',
  '😋' : 'Face Savoring Food',
  '😛' : 'Face with Tongue',
  '😜' : 'Winking Face with Tongue',
  '🤪' : 'Zany Face',
  '😝': 'Squinting Face with Tongue',
  '🐕‍🦺' : 'Service Dog',
  '🐩' : 'Poodle',
  '🐺' : 'Wolf',
  '🦊' : 'Fox',
  '🦝' : 'Raccoon',
  '🐱': 'Cat Face',
  '🍇' : 'Grapes',
  '🍈' : 'Melon',
  '🍉' : 'Watermelon',
  '🍊' : 'Tangerine',
  '🍋' : 'Lemon',
  '🍌' : 'Banana',
  '🍍' : 'Pineapple',
  '🥭': 'Mango',
  '⚽' : 'Soccer Ball',
  '⚾' : 'Baseball',
  '🥎' : 'Softball',
  '🏀' : 'Basketball',
  '🏐' : 'Volleyball',
  '🏈' : 'American Football',
  '🚫' :  'Prohibited',
  '🚳' :  'No Bicycles',
  '🚭' :  'No Smoking',
  '🚯' :  'No Littering'
}



function App() {

  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event){
    var userinput = event.target.value;
    if (userinput === "")
      setMeaning("");
    else 
      emojis[userinput] ? setMeaning(emojis[userinput]) : setMeaning("We don't have this in our database");
  }

  function emojiClickHandler(event){
    var userinput = event.target.innerText;
    setMeaning(emojis[userinput]);
  }

  
  return (
    <div className="App">
      <h1>emoji meaning...</h1>
      <input type="text" onChange={inputChangeHandler} style = {{padding: '0.5rem',margin: '0.5rem'}}></input>
      <div style = {{fontWeight: 'bold', margin: '0.5rem',fontSize: 'larger'}}>{meaning}</div>
      
      <h3>emojis we know:</h3><div style={{ display: "flex" }}>
        <div className="emoji-container">
          {
              Object.keys(emojis).map(e => {
                return <span className="emoji-item" key={e} onClick={emojiClickHandler}>{e}</span>
            })
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
