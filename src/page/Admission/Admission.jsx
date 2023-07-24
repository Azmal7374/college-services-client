import { Link } from "react-router-dom";

const Admission = () => {
    return (
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold ">Admission College List</h1>
          <hr className="border-2 w-64 mt-2 mx-auto border-[#0A6EBD]"/>
            <div className="mt-5">
            <Link to='/information' className="text-2xl md:text-4xl text-[#0A6EBD]">Govt. Syed Hatem Ali College</Link>
            </div>
            <div className="mt-5">
            <Link to='/information' className="text-2xl md:text-4xl text-[#0A6EBD]">Barishal Government Women's College</Link>
            </div>

            <div className="mt-5">
            <Link to='/information' className="text-2xl md:text-4xl text-[#0A6EBD]">Government Barisal College
            </Link>
            </div>
            <div className="mt-5">
            <Link to='/information' className="text-2xl md:text-4xl text-[#0A6EBD]">Model School & College</Link>
           
            </div>

            <div className="mt-5">
            <Link to='/information' className="text-2xl md:text-4xl text-[#0A6EBD]"> Dhaka College</Link>
            </div>

            <div className="mt-5">
            <Link to='information' className="text-2xl md:text-4xl text-[#0A6EBD]">Government Tolaram College</Link>
            </div>
            <div className="mt-5">
            <Link to='/information' className="text-2xl md:text-4xl text-[#0A6EBD]">Government Science College</Link>
            </div>
            <div className="mt-5">
            <Link to='/information' className="text-2xl md:text-4xl text-[#0A6EBD]">Tejgaon College</Link>
            </div>
            <div className="mt-5">
            <Link to='/information' className="text-2xl md:text-4xl text-[#0A6EBD]">Govt. Alekanda College</Link>
            </div>
            
        </div>
    );
};

export default Admission;