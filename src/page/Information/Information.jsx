import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";

 

import { AuthContext } from "../../provider/AuthProvider";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const Information = () => {
    const { user,  } = useContext(AuthContext);
  const { handleSubmit, register, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        // console.log(imageResponse)
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const {collegeName,  studentName, studentEmail, birthDate,   address, subjects,  phone,} = data;
          const newItem = {
            collegeName,
            studentName,
            studentEmail,
            birthDate,
            address,
            subjects,
            image: imgURL,
            phone: parseFloat(phone),
            
            
            
          };
          console.log(newItem);
          fetch('https://college-services-server-rho.vercel.app/information',{
                method:'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
               })
               .then(res => res.json())
               .then(data => {
                console.log(data)
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            else if (data.message === "Admission  already Done"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Admission  already Done!',
                     
                  })
            }
          });
        }
      });
  };

  return (
    <div className="w-full ">
    <Helmet>
      College Services  |  Information
    </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="px-10">
       


      <div className="form-control  w-full  ">
      <label className="label">
        <span className="label-text font-semibold"> College Name</span>
      </label>
      <input
       
        type="text"
        placeholder="College  Name"
        {...register("collegeName", {
          required: "true",
          maxLength: 120,
        })}
        className="p-3  rounded-md w-full  "
      />
    </div>
      

      <div className="md:flex gap-10">
      
      <div className="form-control  w-full  ">
      <label className="label">
        <span className="label-text font-semibold"> Student Name</span>
      </label>
      <input
        defaultValue={user?.displayName}
        type="text"
        placeholder="Student Name"
        {...register("studentName", {
          required: "true",
          maxLength: 120,
        })}
        className="p-3  rounded-md w-full  "
      />
    </div>

    <div className="form-control  w-full  ">
      <label className="label">
        <span className="label-text font-semibold">Student  Email</span>
      </label>
      <input
        defaultValue={user?.email}
        type="email"
        placeholder="Student Email"
        {...register("studentEmail", {
          required: "true",
          maxLength: 120,
        })}
        className="p-3  rounded-md w-full  "
      />
    </div>
      </div>
      

      
      <div className="md:flex gap-10">
      
      <div className="form-control  w-full  ">
      <label className="label">
        <span className="label-text font-semibold">Birth Date</span>
      </label>
      <input
       
        type="date"
        placeholder="Birth Date"
        {...register("birthDate", {
          required: "true",
          maxLength: 120,
        })}
        className="p-3  rounded-md w-full  "
      />
    </div>

    <div className="form-control  w-full  ">
      <label className="label">
        <span className="label-text font-semibold">Student Address</span>
      </label>
      <input
        
        type="text"
        placeholder="Address"
        {...register("address", {
          required: "true",
          maxLength: 120,
        })}
        className="p-3  rounded-md w-full  "
      />
    </div>
      </div>
      


     
      

      
      

      <div className="md:flex gap-10">
      
    
      <div className="form-control  w-full ">
        <label className="label">
          <span className="label-text font-semibold">Subject</span>
        </label>
        <input
          type="text"
          {...register("subjects", {
            required: "true",
          })}
          placeholder="Subjects"
          className="p-3  rounded-md  w-full    "
        />
      </div>

     
      <div className="form-control  w-full ">
        <label className="label">
          <span className="label-text font-semibold">Phone </span>
        </label>
        <input
          type="tel"
          {...register("phone", {
            required: "true",
          })}
          placeholder=" Phone Number"
          className="p-3  rounded-md  w-full    "
        />
      </div>
    </div>

     

    <div className="form-control my-4  ">
    <label className="label">
      <span className="label-text font-semibold">Image*</span>
    </label>
    <input
      {...register("image", {
        required: "true",
      })}
      type="file"
      className="file-input file-input-bordered w-full  "
    />
  </div>

       
        <input
        className=" h-12 bg-[#0A6EBD] hover:bg-[#0787e9] text-white  w-32 flex justify-center items-center btn-sm mt-4 mx-auto"
        type="submit"
        value="Add Information"
      />
      </form>
    </div>
  );
};

export default Information;
