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
 



const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <p>Hello</p>
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
                loader:({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
            } 
           
        ]
    }
  ]);
  
  export default router;
  