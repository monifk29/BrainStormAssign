import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Card";
import { getData } from "../Redux/action";
import styles from "../styles/Landing.module.css"



const Landing = () => {

  const dispatch = useDispatch();

  const [page,setPage] = useState(0);
  const [key,setKey] = useState("");
  const [value,setValue] = useState("");

  const [tog,setTog] = useState(false);

  const capsuleData = useSelector((state) => state.capsule);
 
  const handlePrev = () => {
 
     if(page>= 5){
      setPage(page - 5)
     }
    
  };

  const handleNext = () => {

     if(page <= 14){
      setPage(page + 5)
     }
    
  };
  
    useEffect(() => {
      dispatch(getData(page));
       
    }, [page]);


  const  handleChange = (e) => {
// console.log(value)
setKey(e.target.value)
setTog(true)

    }

    const handleSearch = () => {
      dispatch(getData(page,key,value))
    }
  
    console.log(capsuleData)
    // console.log(page)


  return (
    <div className={styles.main}>
     <div className={styles.nav}>
      <img style={{borderRadius : "50%"}} height="50px" src="https://imgs.search.brave.com/buPZdZyzudXpO58b7Bwh5ATk55Yx_Pgq3uvEx5Yw8as/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/cVJsb2lHSlZpXzJI/WXFRU1BqRExRSGFI/YSZwaWQ9QXBp"/>
     <div style={{width : "10%", display: "flex" , justifyContent: "space-around"}}>
      <button   className={styles.btnPage}  onClick={handlePrev}>-</button>
        <button className={styles.btnPage} onClick={handleNext}>+</button>
      </div>
      <div style={{display : "flex"}}>
        Search By :   
        <select style={{marginLeft : "20px", padding : "5px 10px"}} onChange={(e) => handleChange(e)} >
        <option >None</option>
          <option value="status">Status</option>
          <option value="capsule_serial">Serial</option>
          <option value="type">type</option>
        </select>
        {tog && <div style={{marginLeft : "30px"}}>
          <input onChange={(e) => setValue(e.target.value)}/> <button style={{backgroundColor : "white",border : "none" }} onClick={handleSearch}>Search</button>
          </div>}
      </div>
     </div>
      <div className={styles.container}>
        {
          capsuleData ? capsuleData.map((e) => (
          <Card   {...e} />
          
          )) : ""
        }
      </div>
      
    </div>
  )
}

export default Landing