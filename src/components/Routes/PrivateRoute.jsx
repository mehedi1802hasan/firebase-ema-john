import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Provider';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <span><progress className="w-56 progress"></progress></span>
      }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
 
 
};

export default PrivateRoute;