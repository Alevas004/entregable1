import { getRandomNumber } from "./Utils/getRandomNumber";
import phrases from "./assets/phrases.json";
import Button from "./components/Button/Button";
import "./App.css";
import Phrases from "./components/Phrases";
import cookie1 from "./images/cookie1.png"
import cookie2 from "./images/cookie2.png"
import cookie3 from "./images/cookie3.png"
import cookie4 from "./images/cookie4.png"
import { useState } from "react";


/** MANEJO DE IMAGENES EN VITE 
 * 1. Lo recomendado siempre es usar un url
 * 
*/

const backgrounds = [cookie1, cookie2, cookie3, cookie4]

function App() {
    // const phraseObject = phrases[getRandomNumber(phrases.length - 1)];
    
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () => backgrounds[getRandomNumber(backgrounds.length - 1)];

  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground());

  const changePhrase = () => {
    let newPhrase = getRandomPhrase();
    let newBackground = getRandomBackground();
    
  

    while (newPhrase.phrase === phraseObject.phrase) {
      newPhrase = getRandomPhrase();
    }

    while (newBackground === background) {
      newBackground = getRandomBackground ()
    }

    setPhraseObject(newPhrase)
    setBackground(newBackground)

  };
  return (
  <div className="main_items" style={{backgroundImage: `url("${background}")`}}>
    <h1>FORTUNE COOKIE</h1>
    <Phrases phrase={phraseObject.phrase} />
    <p>
      Author: <mark>{phraseObject.author}</mark>
    </p>
      
      <div className="btn_container">
        <Button handlerClick={changePhrase} />
      </div>
  </div>
  );
}

export default App;
