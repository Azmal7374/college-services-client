import { Link } from "react-router-dom";

const MyCollegeCard = ({college}) => {
    const {_id, image, collegeName, studentName, studentEmail, birthDate, address, subjects  } =college;

    return (
        <div>
        <div className="mt-20 card w-  bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#0d80a5]">
            {collegeName}
          </h2>
          <p className="font-semibold"> Student Email:  {studentEmail}</p>
          <p className="font-semibold"> Birth Date: {birthDate} </p>
          <p className="font-semibold">Address:  {address}</p>
          <p className="font-semibold"> Subjects:  {subjects}</p>
          <div className="card-actions justify-end">
            <Link to={`/singles/${collegeName}`}>
              <button   className=" bg-[#0A6EBD] hover:bg-[#0787e9] text-white p-2 w-32 font-bold rounded-md">
                Details
              </button>
            </Link>

            <Link to='/review'>
              <button   className=" bg-[#0A6EBD] hover:bg-[#0787e9] text-white p-2 w-32 font-bold rounded-md">
               Review
              </button>
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default MyCollegeCard;