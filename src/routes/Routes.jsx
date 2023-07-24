import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Main from "../layout/Main";
import Admission from "../page/Admission/Admission";
import Information from "../page/Information/Information";
import Colleges from "../page/Colleges/Colleges";
import PrivateRoute from "./PrivateRoute";
import CollegeDetails from "../page/CollegeDetails/CollegeDetails";
import Home from "../Componets/Home/Home";
import MyCollege from "../page/MyCollege/MyCollege";
import Review from "../page/Review/Review";
import Profile from "../page/Profile/Profile";
import UpdateForm from "../page/UodateForm/UpdateForm";
 



const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/admission',
                element:<Admission></Admission>
            },
            {
                path:'/information',
                element:<Information></Information>
            }, 
            {
                path:'/colleges',
                element:<Colleges></Colleges>
            } ,
            {
                path:'/college/:id',
                element:<PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
                loader:({params}) => fetch(`https://college-services-server-rho.vercel.app/colleges/${params.id}`)
            } ,
            {
                path:'/myCollege',
                element:<MyCollege></MyCollege>
            },
            {
                path:'/review',
                element:<Review></Review>
            },
        
            {
                path:'/singles/:name',
                element: <CollegeDetails></CollegeDetails>,
                loader:({params}) => fetch(`https://college-services-server-rho.vercel.app/singleCollege/${params.name}`)
            } ,
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/updateForm',
                element:<UpdateForm></UpdateForm>

            }
           
        ]
    }
  ]);
  
  export default router;
  