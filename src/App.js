import { useState } from 'react';
import './App.css';

const emojis = {
  'ðĪĢ' : 'Rolling on the Floor Laughing',
  'ð' : 'Face with Tears of Joy',
  'ð' : 'Slightly Smiling Face',
  'ð' :'Winking Face',
  'ð': 'Smiling Face with Smiling Eyes',
  'ð' : 'Kissing Face with Smiling Eyes',
  'ð' : 'Face Savoring Food',
  'ð' : 'Face with Tongue',
  'ð' : 'Winking Face with Tongue',
  'ðĪŠ' : 'Zany Face',
  'ð': 'Squinting Face with Tongue',
  'ðâðĶš' : 'Service Dog',
  'ðĐ' : 'Poodle',
  'ðš' : 'Wolf',
  'ðĶ' : 'Fox',
  'ðĶ' : 'Raccoon',
  'ðą': 'Cat Face',
  'ð' : 'Grapes',
  'ð' : 'Melon',
  'ð' : 'Watermelon',
  'ð' : 'Tangerine',
  'ð' : 'Lemon',
  'ð' : 'Banana',
  'ð' : 'Pineapple',
  'ðĨ­': 'Mango',
  'â―' : 'Soccer Ball',
  'âū' : 'Baseball',
  'ðĨ' : 'Softball',
  'ð' : 'Basketball',
  'ð' : 'Volleyball',
  'ð' : 'American Football',
  'ðŦ' :  'Prohibited',
  'ðģ' :  'No Bicycles',
  'ð­' :  'No Smoking',
  'ðŊ' :  'No Littering'
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
