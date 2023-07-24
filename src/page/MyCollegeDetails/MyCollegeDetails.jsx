import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCollegeDetails = () => {
    const college = useLoaderData()
    console.log(college)
    return (
        <div>
            
        </div>
    );
};

export default MyCollegeDetails;