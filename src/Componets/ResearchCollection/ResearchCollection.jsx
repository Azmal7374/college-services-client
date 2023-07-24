import { useEffect, useState } from "react";
import Research from "../Research/Research";

const ResearchCollection = () => {

    const [researchs, setResearchs] = useState([]);

    useEffect(() => {
        fetch('https://college-services-server-rho.vercel.app/research')
          .then((res) => res.json())
          .then((data) => {
            setResearchs(data);
          });
      }, []);
      console.log(researchs)

    return (
        <div>
        <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center">College  Research</h1>
        <hr className="border-2 w-32 md:w-48 mt-2 mx-auto border-[#0A6EBD]"/>
        
        <div className="px-5 flex justify-center  flex-wrap gap-10  ">
       
        {
         researchs.map(research =>  
           <Research key={research.id} research={research}></Research>
         )
           
     }
 
 
  
        </div>
        </div> 
        </div>
    );
};

export default ResearchCollection;