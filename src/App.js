import React, { useState, useEffect } from 'react';
import Slider, { Slide } from './components/Slide';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    script.addEventListener('load', () => {
      console.log("carico lo script")
      window.gapi.load("client", () => {
        window.gapi.client
          .init({
            apiKey: "AIzaSyArfZ4StId_Efj3Bmz69d1wVaMt5wXoltU",
            // Your API key will be automatically added to the Discovery Document URLs.
            discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
          }).then(() => setScriptLoaded(true))
      })
    })
    document.body.appendChild(script);
  }, [])

  return scriptLoaded && <div className="App">
    <Routes>
      <Route path="/netcomm-ledwall" element={<Slider/>} />
      <Route path='/netcomm-ledwall/donazioni' element={<p>ciao</p>} /> 
    </Routes>
    </div>
}

export default App;
