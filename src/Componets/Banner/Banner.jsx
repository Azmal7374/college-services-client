import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';


 const Banner = () => {
    return (
        <div>
        <section className="bg-white" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <div className="grid md:grid-cols-2 gap-5 p-4">
        <div className=" mt-10 md:mt-32">
        <h2 className='text-4xl ml-10 mr-10 text-[#0A6EBD] font-bold'>Admission On</h2>
        <h2 className='ml-10 mr-10 text-gray-600 mt-4'>College admission in Bangladesh involves students applying to their preferred colleges based on their academic performance in national examinations like SSC and HSC. The admission process varies depending on the type of college, and students may need to undergo merit-based selection or entrance exams for specific courses. Once accepted, students can pursue undergraduate programs in diverse disciplines offered by the colleges across the country.
        </h2>
       <div className='ml-10 mr-10'>
       <Link to='/admission'>
       <button  className='bg-[#0A6EBD] hover:bg-[#0787e9]  p-3 w-40  rounded-md mt-8 text-white font-bold  '>Admission</button>
       </Link>
       </div>
        </div>
        <div className="mt-10">
        <AwesomeSlider animation="cubeAnimation">
        <div><img src="https://lh3.googleusercontent.com/p/AF1QipMl8NnPRUc0pYkeiJ7mB_VKFvSFmTgDzXhtg8yR=s1360-w1360-h1020" alt="" /></div>
        <div><img src="https://lh3.googleusercontent.com/p/AF1QipMBHPqeiEHPYHmVKy1admnxfvcYNPGO44uwCxE4=s1360-w1360-h1020" alt="" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Dhaka_college_1904.jpg/330px-Dhaka_college_1904.jpg" alt="" /></div>
        <div><img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/289513982_1369562920189060_2292390005746193787_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFieSvBj4mtwogRcupThRz6aPwUz75StlJo_BTPvlK2UlYp8HT0vPMr3dZlvvFv5EqNhqIj1PEqqpp9EKHmJW3G&_nc_ohc=RIxC7HRIF7kAX_Mo4m-&_nc_ht=scontent.fdac22-1.fna&oh=00_AfDh3bcBsVbxBjRxkbPzfQAXLYG9fL8tv4nfoyxO_hF9Gw&oe=64C35102" alt="" /></div>
        <div><img src="https://lh3.googleusercontent.com/p/AF1QipMdHopcWP2Y4Tq88sMoLEvlgyeRKXhenZ6q09F3=s1360-w1360-h1020" alt="" /></div>

        <div><img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/307980038_465892945577099_276903225081285812_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGviBlq61D6L0Kw924fuefjjbbv4ssG3CCNtu_iywbcIDnYZuCP74Rqbrm1GQLPsQuu0iHtuTk_x1_JvqEezUNX&_nc_ohc=3eL2EtWXoAYAX_--k4D&_nc_oc=AQkHjHE4z-fwoeKaMq-iCL1TH6TM06I-Qw60yLV3ufpr_cf69Eeylu0icUTIl8nmoGk&_nc_ht=scontent.fdac22-1.fna&oh=00_AfApzJgqsQixiVnlEUZZ6pSs9J5VTWsrUdwpECTEG2CbZw&oe=64C29FDC" alt="" /></div>

        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mAw6hx65gEfcmq8su6_-3N-wRywKzX1GWlpXXY6NkA&s " alt="" /></div>

 

        <div><img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/272858433_236792151977295_6638865484737774220_n.jpg?stp=c79.0.563.563a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHYCqjsJcLLJlx_TgAFjwFBSvx28AwEfhlK_HbwDAR-GWoAD-jiM7HJw7EdGoLknpogI-ftDcpr19MexipocnX7&_nc_ohc=Uwg6k4RBtvcAX_JkoPd&_nc_ht=scontent.fdac22-1.fna&oh=00_AfBOPktxB6A39gpg7-tBncDm1Q7uT9K21wTINKq1VDtJZw&oe=64C32E91" alt="" /></div>
      </AwesomeSlider>
        </div>
        </div>
          </section>  
        </div>
    );
 };
 
 export default Banner;