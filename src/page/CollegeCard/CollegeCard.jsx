import { Link  } from "react-router-dom";


const CollegeCard = ({college}) => {
    // console.log(college)
    const {_id, serial,collegeName, ratting, research, admissionDate, image, history, event, sports} =college;

    

  return (
    <div>
     
        <div className="mt-20 card w-  bg-base-100 shadow-xl">
          <figure>
            <img className="w-96 h-64"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-[#0d80a5]">
              {collegeName}
            </h2>
            <p className="font-semibold">Ratting:  {ratting}</p>
            <p className="font-semibold">Admission Date: {admissionDate} </p>
            <p className="font-semibold">Number of Research:  {research}</p>
            <div className="card-actions justify-end">
              <Link to={`/college/${_id}`}>
                <button   className=" bg-[#0A6EBD] hover:bg-[#0787e9] text-white p-2 w-32 font-bold rounded-md">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
       
    </div>
  );
};

export default CollegeCard;
