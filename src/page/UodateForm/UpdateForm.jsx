 
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import Lottie from 'lottie-react'
import reader from '../../assets/118046-lf20-oahmox5rjson.json'
import SocialLogin from "../SocialLogin/SocialLogin";


const UpdateForm = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const { createUser, updateUserProfile} = useContext(AuthContext)

    

    const onSubmit = data =>{
        
         if(data.password !== data.confirmPassword){
         return toast('password Does Not Match')
         }
         createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
              const savedUser = {name: data.name, email: data.email, photo:data.photoURL,role:'student'}
               fetch('https://college-services-server-rho.vercel.app/users',{
                method:'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(savedUser)
               })
               .then(res => res.json())
               .then(data => {
                 if(data.insertedId){
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')
                 }
               })
             
            })
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    console.log(watch("example"));

    return (
    <div className=" flex flex-col items-center justify-center lg:flex-row gap-10 p-4 md:p-16 mt-4">
    
   <div>
   <h2 className="text-center mb-2 font-bold  text-2xl md:text-4xl text-[#0A6EBD] ">Update User Information</h2>
   <div className=" w-96 mx-auto bg-slate-100 p-4">
   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
   <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input type="text" {...register("name", {required: true})} name="name" placeholder="name" className="p-3 border border-[#0A6EBD] outline-none rounded-md " />
     {errors.name && <span className="text-[#0A6EBD]">name is required</span>}
   </div>
   <div className="form-control">
   <label className="label">
     <span className="label-text">Photo URL</span>
   </label>
   <input type="text" {...register("photoURL", {required: true})}   placeholder="Photo URL" className="p-3 border border-[#0A6EBD] rounded-md" />
   {errors.photoURL && <span className="text-[#0A6EBD]">Photo URL is required</span>}
 </div>
   <div className="form-control">
   <label className="label">
     <span className="label-text">Email</span>
   </label>
   <input type="email" {...register("email", {required: true})} name="email" placeholder="email" className="p-3 border border-[#0A6EBD] outline-none rounded-md" />
   {errors.email && <span className="text-[#0A6EBD]">email is required</span>}
 </div>
    

    
   <div className="form-control">
   <input className="btn bg-[#0A6EBD] hover:bg-[#0787e9] text-white" type="submit" value="Submit"></input>
   </div>
 </form>
  
 </div>
   </div>


   <div>
   <div className='w-full lg:w-4/5 lg:ml-auto  '>
          <Lottie animationData={reader} loop={true} />
        </div>
   
   </div>
    
    </div>
    );
};

export default UpdateForm;
 