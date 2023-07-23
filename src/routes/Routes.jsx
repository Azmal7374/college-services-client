import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Main from "../layout/Main";
import Admission from "../page/Admission/Admission";
import Information from "../page/Information/Information";
 



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
            }
           
        ]
    }
  ]);
  
  export default router;
  