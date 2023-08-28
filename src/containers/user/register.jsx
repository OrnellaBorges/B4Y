import {useState, useEffect} from "react"
import {Navigate} from "react-router-dom"
import {addOneUser} from "../../api/user"

const Register = (props) =>{
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState(null)
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        setError(null)
        let datas = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            address: address,
            zip: zip,
            city: city,
            phone: phone
        }
        
        addOneUser(datas)
        .then((res)=>{
            if(res.status === 200){
                setRedirect(true)
            } else {
                setError(res.msg)
            }
        })
        .catch(err=>console.log(err))
    }
    
    if(redirect){
        return <Navigate to="/login"/>
    }
    return (
        <section>
            <h2>S'enregistrer</h2>
            {error !== null && <p>{error}</p>}
            <form
                className="b-form"
                onSubmit={onSubmitForm}
            >
                <input type="text"
                    placeholder="Votre prénom"
                    onChange={(e)=>{
                        setFirstName(e.currentTarget.value)
                    }}
                    required
                />
                <input type="text"
                    placeholder="Votre nom"
                    onChange={(e)=>{
                        setLastName(e.currentTarget.value)
                    }}
                    required
                />
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
                <input type="text"
                    placeholder="Votre adresse"
                    onChange={(e)=>{
                        setAddress(e.currentTarget.value)
                    }}
                    required
                />
                <input type="text"
                    placeholder="Votre code postal"
                    onChange={(e)=>{
                        setZip(e.currentTarget.value)
                    }}
                    required
                />
                <input type="text"
                    placeholder="Votre ville"
                    onChange={(e)=>{
                        setCity(e.currentTarget.value)
                    }}
                    required
                />
                <input type="text"
                    placeholder="Votre téléphone"
                    onChange={(e)=>{
                        setPhone(e.currentTarget.value)
                    }}
                    required
                />
                <input type="submit" name="Enregistrer"/>
            </form>
        </section>
    )
}

export default Register