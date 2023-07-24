 
const Gallery = () => {
   const images = [
       "https://img.freepik.com/free-photo/low-angle-graduated-students_23-2148522181.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.1.220873417.1673880723&semt=ais",

       "https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201836.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais",

       "https://img.freepik.com/free-photo/three-happy-international-graduate-friends-greeting-university-campus-graduation-robes-with-diploma_496169-1360.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais",

       "https://img.freepik.com/premium-photo/happy-university-graduates-throwing-their-graduation-caps-into-air_627829-10090.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais",

       "https://img.freepik.com/free-photo/group-six-indian-businessman-suits-posed-outdoor-winter-day-europe-looking-laptop_627829-13345.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais",

       "https://img.freepik.com/free-photo/serious-indian-graduate-graduation-robe-with-crossed-arms-looking-forward_496169-1338.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais",

       "https://img.freepik.com/premium-photo/asian-students-graduate-being-congratulated-by-their-parent-graduation-ceremony_1150-3183.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.1.220873417.1673880723&semt=ais",

       "https://img.freepik.com/premium-photo/graduating-students-throwing-graduation-caps-air_53876-158208.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.1.220873417.1673880723&semt=ais",

       "https://img.freepik.com/free-photo/group-pakistani-man-wearing-traditional-clothes-salwar-kameez-kurta-with-pakistan-flags_627829-4846.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais",

       "https://img.freepik.com/free-photo/group-pakistani-man-wearing-traditional-clothes-salwar-kameez-kurta_627829-4820.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais",
       "https://img.freepik.com/free-vector/illustration-university-graduates_53876-18434.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais",
       "https://img.freepik.com/free-photo/group-six-indian-businessman-suits-posed-outdoor-winter-day-europe-hugs-happy-emotions_627829-1409.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=ais"
      
     ]
     return (
       <div className="mt-20 container mx-auto px-5  lg:px-32  ">

       <h1 className="text-2xl md:text-3xl  font-bold text-center">Graduate's Group Pictures</h1>
       <hr className="border-2 w-72 mt-2 mx-auto border-[#0A6EBD]"/>
       
         
         <div className=" flex flex-wrap   mt-10">
           {images.map((image, index) => (
             <div key="{index}" className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2" data-aos="flip-left"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000">
               <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src={image}/>
             </div>
           ))}
         </div>
       </div>
     );
   }

export default Gallery;




