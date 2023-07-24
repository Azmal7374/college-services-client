
const CollegeReviewCard = ({review}) => {
    const {name, date, description } =review;
    return (
        <div className="mt-10">
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-[#0d80a5]">{name}</h2>
          <p>Review Date: {date}</p>
         <p>Reviews: {description}</p>
        </div>
      </div>
        </div>
    );
};

export default CollegeReviewCard;