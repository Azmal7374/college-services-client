import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyCollegeCard from "../MyCollegeCard/MyCollegeCard";

const MyCollege = () => {

  const { user, loading } = useContext(AuthContext);
  const [colleges, setColleges] = useState([]);


  useEffect(() => {
    fetch(`https://college-services-server-rho.vercel.app/myColleges/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, [user]);
  console.log(colleges)

    return (
        <div>
        <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center">My Colleges</h1>
        <hr className="border-2 w-32 md:w-48 mt-2 mx-auto border-[#0A6EBD]"/>
        
        <div className="px-5 flex justify-center  flex-wrap gap-10  ">
       
        {
         colleges.map((college) =>  
           <MyCollegeCard  key={0}  college={college}></MyCollegeCard>
         )
           
     }
 
 
  
        </div>
        </div> 
        </div>
    );
};

export default MyCollege;