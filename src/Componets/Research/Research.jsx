
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faHeartBroken,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { MagnifyingGlass } from "react-loader-spinner";
const  Research = ({ research }) => {
    console.log(research)
  const [fold, setFold] = useState(true);
  const { topic, image , like, share, description, date } =research;
  return (
    <div className="mt-10">
    <div className="lg:flex justify-center gap-10">
      <div className="md:w-1/5 ">
        <img
          className="w-96 h-96 p-4  mx-auto"
          style={{ borderRadius: "20px" }}
          src={image}
          alt=""
        />
      </div>

      <div className="w-3/5 mx-auto">
        <div className="date text-gray-600 flex justify-between">
          <div className="">
            <p>{date}</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-600 hover:text-[#0d80a5]">
              <FontAwesomeIcon
                className=" mx-2"
                icon={faHeartBroken}
              ></FontAwesomeIcon>
              {like}
            </p>
            <p className="text-gray-600 hover:text-[#0d80a5]">
              <FontAwesomeIcon
                className="mx-2"
                icon={faShare}
              ></FontAwesomeIcon>
              {share}
            </p>
          </div>
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-[#0d80a5]">{topic}</h1>
        

        {fold ? (
          <>
            <p className=" text-gray-500">
              {description.substring(0, 200)}.....
            </p>
            <span
              className="cursor-pointer text-[#0d80a5] mb-5"
              onClick={() => setFold(!fold)}
            >
              Read More
            </span>
          </>
        ) : (
          <>
            <p className=" text-gray-900">{description}....</p>
            <span
              className="cursor-pointer text-[#0d80a5] mb-5"
              onClick={() => setFold(!fold)}
            >
              Read Less
            </span>
          </>
        )}
      </div>
    </div>
  </div>
  
    ) 
};

export default  Research;


