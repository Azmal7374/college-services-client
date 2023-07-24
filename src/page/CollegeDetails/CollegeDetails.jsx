import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {

    const college = useLoaderData()
    console.log(college)

    const {_id, serial,collegeName, ratting, research, admissionDate, image, history, event, sports} =college;
    return (
        <div className='mt-10 p-8'>
            <div className="lg:flex">
            <div>
            <img data-aos="zoom-in"  className="w-4/5 lg:w-auto lg:h-screen " src={ image} alt="" />
            </div>
            <div className='bg-slate-200 w-4/5 lg:h-screen   p-8'>
            <p className="text-2xl">College Name: <span className=" font-bold text-[#0d80a5]">{collegeName}</span></p> 
              
            <p className="text-2xl"> Ratting: <span className=" font-bold">{ratting}</span></p>
            <p className="text-2xl">Research: <span className=" font-bold">{research}</span></p>
            
            <p className="text-xl">Admission Date: <span className=" font-semibold">{admissionDate}</span></p>
          
            
            <p className="text-xl mt-2">History  : <span className="">{history.slice(0,300)}  </span></p>

            <p className="text-xl mt-2">Events  : <span className="">{event.slice(0,400)}  </span></p>

            <p className="text-xl mt-3">Sports  : <span className="">{sports.slice(0,450)}  </span></p>
            

            </div>
            </div>
        </div>
    );
};

export default CollegeDetails;