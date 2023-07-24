import { useContext, useEffect, useState } from "react";
import Sppiner from "../../page/share/Spinner/Spinner";
import { AuthContext } from "../../provider/AuthProvider";
import CollegeCard from "../../page/CollegeCard/CollegeCard";
import Data from "../../utilies/common";

const AllColleges = () => {

    // const [colleges, setColleges] =useState([])

//   const [searchText, setSearchText] = useState("");


    // useEffect(()=>{
    //     fetch('https://college-services-server-rho.vercel.app/allColleges')
    //     .then(res => res.json())
    //     .then(data => {
    //      setColleges(data);
    //     })
    // },[])

    // console.log(colleges)

    const [colleges, setColleges] = Data()
console.log(colleges)
    // const handleSearch = () => {
    //     fetch(`https://college-services-server-rho.vercel.app/collegeSearchByName/${searchText}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         setColleges(data);
    //       });
    //   };
    



    const{loading} = useContext(AuthContext)
  console.log(loading)
    if(loading){
       
        return <Sppiner></Sppiner>
        
       }
    return (
        <div>

        <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center">All Colleges</h1>
        <hr className="border-2 w-32 md:w-48 mt-2 mx-auto border-[#0A6EBD]"/>
        
        <div className="px-5 flex justify-center  flex-wrap gap-10  ">
       
        {
         colleges.slice(0,6).map(college => <>
           <CollegeCard key={college._id} college={college}></CollegeCard>
            
           </>)
     }
 
 
  
        </div>
        </div>
            
        </div>
    );
};

export default AllColleges;
   