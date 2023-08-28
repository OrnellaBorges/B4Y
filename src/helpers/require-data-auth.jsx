import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux' 
//import des action qui chargera les bière venant dun back
//import {selectUser, connectUser} from '../slices/userSlice'
//import {selectBeers, loadBeers} from '../slices/beerSlice'
import {Navigate, useParams} from 'react-router-dom'
import {checkMyToken} from '../api/user'
import {displayBeers} from '../api/beer'

//HOC de controle des datas et de la sécurité
const RequireDataAuth = (props) =>{
    //on récup les params de la route
    const params = useParams()
    //on récupère la state user dans le store en mode lecture
    
    //on prépare la fonctionnalité pour dispatcher notre action dans le store
    const dispatch = useDispatch()
    //on récupère le composant à afficher qui a été passé en tant que props via App.js
    const Child = props.child
    //gestion de la redirection
    const [redirect, setRedirect] = useState(false)
    //au chargement de chaque composant
    useEffect(()=>{
        //si les bières ne sont pas chargé dans redux, on les charge (action du store)
        
        
        
        //on va tester si on est connecté via les infos de redux
        //si l'utilisateur n'est pas logged (store)
        
            //on récup le token dans le localStore
            
            //si le storagee répond null (pas trouvé) et que la props auth est true (route protégée)
            
                //on demande une redirection
                
            //sinon
            
                //si le token n'est pas null
                
                     //on appel notre requète axios qui va vérifier le token dans le back checkToken
                     
                        //si le status de la réponse n'est pas 200
                        
                            //si la route est protégée
                            
                                //on demande la redirection
                                
                        //sinon
                            
                            //on stock la réponse de la requète axios dans une variable user (retourne un objet)
                            
                            //on peut rajouter une propriété token à user avec le token dedans
        
                            //appel l'action de connexion de l'utilisateur (store)
                            
                            //si le role de l'user n'est pas admin
                            
                                //si la props admin est true (route protégée d'admin)
                                
                                    //on demande la redirection
                            
    }, [props])
    
    if(redirect){
        if(props.admin){
            return <Navigate to="/"/>
        } else {
            return <Navigate to="/login"/>
        }
    }
    return (<Child {...props} params={params}/>)
}

export default RequireDataAuth