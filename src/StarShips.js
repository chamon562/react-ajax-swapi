import React, { useState, useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Route, Link} from 'react-router-dom'

export default function StarShips(props) {
  // defined in app.js as setShips(res.data.results) passed
  // in from app.js as ships within the StarShips component to be used 
  // as props here in StarShip.js
  let ships = props.ships 
  console.log(ships)
  // changed to let location 
  // let location= {
  //   pathname:'/shipdetails',
  //   state: {ships}
  // }
// console.log(location)
  // console.log(ships)
  // console.log shows the 10 objects in the console good got info
  return (
    
    // <div>
    //   {/* <button onClick={ship.map((s, idx)=> <li key={idx}>{s.name}</li>)}>click</button> */}
    //   {ship.map((s, idx)=> <li key={idx}>{s.name}</li>)}
    // </div>
    <div className='ships'>
   
    {ships.map((ships, idx) => {
      return <Link to={{pathname:'/shipdetails', state: {ships}}} key={ships.name} ><button>{ships.name}</button> </Link>
    })}
    {/* <h1>Star Ships</h1>
    
    {ships.map((ships, idx) => (
        <a href='/shipdetails' key={idx}>{ships.name}</a>
    ))} */}
</div>
  );
}
