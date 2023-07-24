import { useForm } from "react-hook-form";
import {   toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => 
  {
    
    fetch('https://college-services-server-rho.vercel.app/reviews',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res =>res.json())
      .then(result=>{
        console.log(result);
        if(result.insertedId){
          toast('Successfully Added!')
        }
      })
    console.log(data);
  }
    return (
        <div>
        <div className="flex justify-center mt-10 p-8 bg-slate-200">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
        
       <div className="mt-4">
        
       <input className="w-96 p-4" {...register("name")} placeholder="College Name"/>
       </div>
        
       <div className="mt-4">
       <input type='date' className="w-96 p-4" {...register("date")} placeholder="Review Date"/>
       </div>
       
    
      
    
       
    
       <div className="mt-4">
       <textarea className="w-96 h-72 p-4" {...register("description")} placeholder="Review Details"/>
       </div>
    
         <div className="text-center">
         
        <input className="mt-4 bg-[#0A6EBD] hover:bg-[#0787e9] text-white p-3 btn-wide font-bold rounded-md" type="submit" value="Add Review" />
         </div>
      </form>
        </div>
        </div>
    );
};

export default Review;