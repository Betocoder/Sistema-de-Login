import { useContext } from "react"
import AuthContext from "./authContext"
import Login from "../../components/login";

export const ReaquireAuth = ({children} : { children: JSX.Element}) => {
    const auth = useContext(AuthContext);
    
    if(!auth.user) {
        return <Login/>
    }
    return children
}