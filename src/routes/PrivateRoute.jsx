import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Sppiner from '../page/share/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
        console.log(loading);
    if(loading){
        return  (
          <div className="mt-10 text-center">
            <Sppiner></Sppiner>
          </div>
        )
    }
    
    if(user){
        return children;
     }
    return  <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;