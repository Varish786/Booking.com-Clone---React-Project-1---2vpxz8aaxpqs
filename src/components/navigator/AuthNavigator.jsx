
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom'

export const AuthNavigator = ({ children }) => {
    const loc = useLocation();
    const {pathname}=loc;
    const cop={...loc.state}
    // --------------------------------------
    useEffect(()=>{
        sessionStorage.setItem("prev",JSON.stringify(pathname));
    },[loc])
     
 
    return loc.state.logsDetails.islog ? 
    (children) 
     : 
     (<Navigate to="/login" state={cop}/>)
}
