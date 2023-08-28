import {useState, useEffect} from "react"
import {useDispatch} from "react-redux"
import {logoutUser} from "../../slices/userSlice"
import {Navigate} from "react-router-dom"

const Logout = (props)=>{
    const dispatch = useDispatch()
    const [redirect, setRedirect] = useState(false)
    
    useEffect(()=>{
        //ATTENTION: ne pas oublier de supprimer le token sinon require-data-auth va continuer à reconnecter
        window.localStorage.removeItem("b4y-token")
        //on demande la deconnexion dans le store de redux
        dispatch(logoutUser())
        setRedirect(true)
    }, [])
    if(redirect) {
        return <Navigate to='/login' />
    }
    return (
        <div>
        </div>
    )
}
export default Logout