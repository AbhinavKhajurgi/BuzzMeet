import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const withAuth = (WrappedComponent)=>{
    const AuthComponent = (props)=>{
        const router = useNavigate();

        const isAuthencited=()=>{
            if(localStorage.getItem("token")){
                return true;
            }
            return false;
        }

        useEffect(()=>{
            if(!isAuthencited()){
                router("/auth")
            }
        },[])

        // Corrected line: render the WrappedComponent
        return <WrappedComponent {...props}/>
    }
    return AuthComponent;
}

export default withAuth;