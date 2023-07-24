import { useEffect, useState } from "react";
import CollegeReviewCard from "../CollegeReviewCard/CollegeReviewCard";

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://college-services-server-rho.vercel.app/reviews')
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
          });
      }, []);
    //   console.log(reviews)
    return (
        <div>
        <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center">College Reviews</h1>
        <hr className="border-2 w-32 md:w-48 mt-2 mx-auto border-[#0A6EBD]"/>
        
        <div className="px-5 flex justify-center  flex-wrap gap-10  ">
       
        {
         reviews.map((review) =>  
           <CollegeReviewCard  key={review._id} review={review}></CollegeReviewCard>
         )
           
     }
 
 
  
        </div>
        </div> 
        </div>
    );
};

export default ShowReview;