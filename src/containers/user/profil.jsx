import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {selectUser, connectUser} from "../../slices/userSlice"
import {updateProfil, checkMyToken} from '../../api/user'

const Profil = (props) => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    
    const [msg, setMsg] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    
    useEffect(()=>{
        setFirstName(user.infos.firstName)
        setLastName(user.infos.lastName)
        setAddress(user.infos.address)
        setZip(user.infos.zip)
        setCity(user.infos.city)
        setPhone(user.infos.phone)
    }, [user])
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        
        let datas = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            zip: zip,
            city: city,
            phone: phone
        }
        
        updateProfil(datas, user.infos.id)
        .then((res)=>{
            console.log("updateProfil",  res)
            if(res.status !== 200){
                setMsg("Erreur lors de la modification!")
            } else {
                checkMyToken()
                .then((response) =>{
                    console.log("checkMyToken", response)
                    if(response.status !== 200){
                        setMsg("Erreur lors de la modification!")
                    }else{
                        const token = window.localStorage.getItem("b4y-token")
                        console.log(token)
                        //on stock les infos de la requète axios dans un variable
                        let newUser = res.newUser
                        //on peut rajouter le token à l'objet
                        newUser.token = token
                        //on met à jour la state globale de l'utilisateur connect
                        dispatch(connectUser(newUser))
                        setMsg("Profil modifié avec succés!")
                    }
                })
                .catch(err=>console.log(err))
            }
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <section>
            <h2>Mon profil</h2>
            {msg !== null && <p>{msg}</p>}
            <form
                className="b-form"
                onSubmit={onSubmitForm}
            >
                <input type="text"
                    defaultValue={user.infos.firstName}
                    onChange={(e)=>{
                        setFirstName(e.currentTarget.value)
                    }}
                />
                <input type="text"
                    defaultValue={user.infos.lastName}
                    onChange={(e)=>{
                        setLastName(e.currentTarget.value)
                    }}
                />
                
                <input type="text"
                    defaultValue={user.infos.address}
                    onChange={(e)=>{
                        setAddress(e.currentTarget.value)
                    }}
                />
                
                <input type="text"
                    defaultValue={user.infos.zip}
                    onChange={(e)=>{
                        setZip(e.currentTarget.value)
                    }}
                />
                
                <input type="text"
                    defaultValue={user.infos.city}
                    onChange={(e)=>{
                        setCity(e.currentTarget.value)
                    }}
                />
                
                <input type="text"
                    defaultValue={user.infos.phone}
                    onChange={(e)=>{
                        setPhone(e.currentTarget.value)
                    }}
                />
                
                <input type="submit" name="Enregistrer" />
            </form>
        </section>
    )
}

export default Profil