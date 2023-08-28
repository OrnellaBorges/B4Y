import Header from "./components/header"
import Home from "./containers/home"
import Register from "./containers/user/register"
import Login from "./containers/user/login"
import Profil from "./containers/user/profil"
import Logout from "./containers/user/logout"
import './App.css'

import {Routes, Route} from "react-router-dom"
import RequireDataAuth from "./helpers/require-data-auth"

function App() {


  return (
   <div className="App">
    <Header/>
    <Routes>
      <Route exact path="/" element={<RequireDataAuth child={Home} auth={false} admin={false}/>} />
      <Route exact path="/register" element={<Register />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/profil" element={<RequireDataAuth child={Profil} auth={true} admin={false}/>} />
      <Route exact path="/logout" element={<RequireDataAuth child={Logout} auth={true} admin={false}/>} />
    </Routes>
   </div>
  )
}

export default App