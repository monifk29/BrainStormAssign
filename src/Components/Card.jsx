import React, { useState } from 'react'
import styles from "../styles/Card.module.css"

const Card = (props) => {
    const [toggle,setToggle] = useState(false)
 

    function handleModel(){
      setToggle(true)
    }
  const handleClose =() =>{
        setToggle(false)
      }
    //   console.log(toggle)
  return (
    <div  className={styles.card}>

    {
        toggle && <div style={{position : "absolute",right : "0", backgroundColor: "rgb(87,103,132)",width: "100%",padding : "5px 10px"}}>
            <h2>Misssions :</h2>
            <h3>Name : {props.missions[0].name}</h3>
            <h3>flight : {props.missions[0].flight}</h3>

          <p>Details : {props.details}</p>
          <h5>Landings : {props.landings}</h5>
          <h4>Status : {props.status}</h4>

            <button onClick={handleClose}>close</button>
        </div> 
    }

    
    <div onClick={handleModel} style={{ marginTop : "100px"}}>
        <h1> Serial No :{props.capsule_serial}</h1>
        <h2> Id : {props.capsule_id}</h2>
        <h2> Type : {props.type}</h2>
        <h2> Launch :{props.original_launch}</h2>
    </div>

   
    </div>
  )
}

export default Card

// "capsule_serial": "C101",
// "capsule_id": "dragon1",
// "status": "retired",
// "original_launch": "2010-12-08T15:43:00.000Z",
// "original_launch_unix": 1291822980,
// "missions": [
//   {
//     "name": "COTS 1",
//     "flight": 7
//   }
// ],
// "landings": 0,
// "type": "Dragon 1.0",
// "details": "Reentered after three weeks in orbit",
// "reuse_count": 0