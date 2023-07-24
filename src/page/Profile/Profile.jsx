import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const{user, loading} = useContext(AuthContext);
    // console.log(user)
    const [emails, setEmail] =useState([])
    useEffect(()=>{
        fetch(`https://college-services-server-rho.vercel.app/singleUser/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setEmail(data);
        })
    },[])

    console.log(emails)
        const {name,email,photo,_id} =emails

    return (
        <div className="flex justify-center mt-20">
        <div className="  w-96 bg-base-100 shadow-xl">
        <figure><img className="w-60 mx-auto border rounded-full border-[#0A6EBD]" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-3xl text-center text-[#0A6EBD]">{name}</h2>
          <p className="text-center text-xl">{email}</p>
          
          <div className="text-center mt-2">
         <Link to='/updateForm'>
         <button className="p-2 w-32 bg-[#0A6EBD] hover:bg-[#0787e9] text-white font-bold">Update</button>
         </Link>
          </div>
        </div>
      </div>  
        </div>
    );
};

export default Profile;