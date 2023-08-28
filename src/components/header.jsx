import {Link} from 'react-router-dom'
import logo from '../assets/logo/logo-beer.jpg'
import {useSelector} from "react-redux"
import {selectUser} from "../slices/userSlice"
import {selectBasket} from "../slices/basketSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome, faPersonFalling, faGears, faBeerMugEmpty , faRightFromBracket} from '@fortawesome/free-solid-svg-icons'


const Header = (props) => {
    
    const user = useSelector(selectUser)
    const basket = useSelector(selectBasket)
    
    return (<header className="header-nav">
        <nav>
            <div className="list1">
                <img src={logo} />
                <Link to="/"><FontAwesomeIcon icon={faHome}/></Link>
                <Link to="/product"><FontAwesomeIcon icon={faBeerMugEmpty}/> Se butter</Link>
            </div>
            {user.isLogged === false ? <div className="list2">
                <Link to="/register">S'enregistrer</Link>
                <Link to="/login">Se connecter</Link>
                <Link to="/basket"><FontAwesomeIcon icon={faCartShopping}/>{basket.basket.length > 0 && <span className="span-basket">{basket.basket.length}</span>}</Link>
            </div> : <div className="list2">
                {user.infos.role === "admin" && <Link to="/admin"><FontAwesomeIcon icon={faGears}/></Link>}
                <Link to="/profil"><FontAwesomeIcon icon={faPersonFalling} /> {user.infos.firstName} {user.infos.lastName.toUpperCase()}</Link>
                <Link to="/logout"><FontAwesomeIcon icon={faPersonFalling} /></Link>
                <Link to="/basket"><FontAwesomeIcon icon={faCartShopping}/>{basket.basket.length > 0 && <span className="span-basket">{basket.basket.length}</span>}</Link>
            </div>}
            
        </nav>
        <section className="header-pict">
            <div className="background_opacity"></div>
            <h1>Beer4you, de la mauvaise bière, mais de la bière quand même !</h1>
        </section>
    </header>)
}

export default Header