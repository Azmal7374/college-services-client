import { useEffect, useState } from "react";



 const Data = () =>{
    const [colleges, setColleges] =useState([])
    useEffect(()=>{
        fetch('https://college-services-server-rho.vercel.app/allColleges')
        .then(res => res.json())
        .then(data => {
            setColleges(data);
        })
    },[])
    console.log(colleges)

    return [colleges, setColleges]
    
    
 }

export default Data;

  

