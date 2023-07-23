import Footer from "../page/share/Footer/Footer";
import Navbar from "../page/share/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    return (
        <div>
        <ToastContainer></ToastContainer>
       
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;