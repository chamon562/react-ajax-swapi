import React, {useState, useEffect} from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StarShips from './StarShips'
import ShipDetails from "./ShipDetails";
import axios from 'axios'

function App() {
  
  const [ships, setShips] = useState([]);
  

  useEffect (()=>{
    axios.get('https://swapi.dev/api/starships/')
    .then((res) =>{
      setShips(res.data.results)
    })
  },[])
  
  useEffect(() =>{
    axios.get('')
  })

  return (
    <Router>
      <div>
        <nav className="App">
          <h1>STAR WARS STARSHIPS</h1>
        </nav>
        {/* {ships.name} */}
        {/* {ships.map((ships, idx) => (
        <a href='/shipdetails' key={idx}>{ships.name}</a>
    ))} */}
        <Route exect path="/" render={() => <StarShips ships={ships} /> } />
        <Route path="/shipdetails" component={ShipDetails} />
      </div>
    </Router>
  );
}

export default App;
