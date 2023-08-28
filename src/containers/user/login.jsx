import {useState, useEffect} from "react"
import {Navigate} from "react-router-dom"
import {loginUser} from "../../api/user"
import {useDispatch} from "react-redux"
import {connectUser} from "../../slices/userSlice"

const Login = (props) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState(null)
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        setError(null)
        
        let datas = {
            email: email,
            password: password
        }
        loginUser(datas)
        .then((res)=>{
            if(res.status === 200){
                //je stock le token dans le localStorage
                window.localStorage.setItem('b4y-token', res.token)
                //je crée un objet d'user à pousser dans le store de redux
                let newUser = res.user
                newUser.token = res.token
                //j'ordonne la connexion à redux
                dispatch(connectUser(newUser))
                //redirection vers l'accueil
                setRedirect(true)
            } else {
                setError(res.msg)
            }
        })
        .catch(err=>console.log(err))
    }
    
    if(redirect){
        return <Navigate to="/"/>
    }
    return (
        <section id="login">
            <h2>Se connecter</h2>
            {error !== null && <p>{error}</p>}
            <form
                className="b-form"
                onSubmit={onSubmitForm}
            >
                <input type="email"
                    placeholder="Votre mail"
                    onChange={(e)=>{
                        setEmail(e.currentTarget.value)
                    }}
                    required
                />
                <input type="password"
                    placeholder="Votre mot de passe"
                    onChange={(e)=>{
                        setPassword(e.currentTarget.value)
                    }}
                    required
                />
                <input type="submit" name="Se connecter"/>
            </form>
        </section>
    )
}

export default Login