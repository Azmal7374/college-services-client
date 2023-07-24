import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CollegeCard from "../CollegeCard/CollegeCard";
import { AuthContext } from "../../provider/AuthProvider";
import Sppiner from "../share/Spinner/Spinner";

const Colleges = ( ) => {

  const [colleges, setColleges] =useState([])
    useEffect(()=>{
        fetch('https://college-services-server-rho.vercel.app/allColleges')
        .then(res => res.json())
        .then(data => {
            setColleges(data);
        })
    },[])

    console.log(colleges)

    const{loading} = useContext(AuthContext)
  console.log(loading)
    if(loading){
       
        return <Sppiner></Sppiner>
        
       }


    return (
       <div className="mt-10">
       <h1 className="text-3xl font-bold text-center">All Colleges</h1>
       <hr className="border-2 w-48 mt-2 mx-auto border-[#0A6EBD]"/>
       
       <div className="px-5 flex justify-center  flex-wrap gap-10  ">
      
       {
        colleges.map(college => <>
          <CollegeCard key={college.serial} college={college}></CollegeCard>
      
          
          </>)
    }


 
       </div>
       </div>
    );
};

export default Colleges;