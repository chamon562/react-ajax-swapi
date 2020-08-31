import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'

export default function ShipDetails(){
    const location = useLocation()
    console.log(location)
    // export default function ShipDetails(props){
    // console.log
    // console.log(location)
//    const [shipDetails, setShipDetails] = useState([])
//    useEffect(() =>{
//        let url = 'https://swapi.dev/api/starships/'
//        axios.get(url)
//     //    console.log(url)
//        .then((res) =>{
//            setShipDetails(res.data.results[0])
//        })
//    }, [])
//    console.log(shipDetails)
    return(
        <div>
            <h1>ShipDetails</h1>
            <h3>{location.state.ships.name}</h3>
            <h3>{location.state.ships.model}</h3>
        <a href='/'>Return</a>
           {/* <h1>Ship Details</h1>  */}
           {/* {props.ships.model} */}
           
        </div>
    )
}