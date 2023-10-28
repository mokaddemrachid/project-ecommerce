import React, { useEffect } from 'react'
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { TfiHeart } from "react-icons/tfi";
import { BiUser } from "react-icons/bi"
import { IoBagOutline } from "react-icons/io5"
import Typical from 'react-typical'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getUser, logout } from '../redux/action/userAction';
import Dropdown from 'react-bootstrap/Dropdown';




function Navs({setSearch}) {
const dispatch = useDispatch()
const navigate = useNavigate()

useEffect(()=>{
  dispatch(getUser())
},[])

const user = useSelector(state=>state.userReducer.user)
console.log(user)
const handleLogout=()=>{
  dispatch(logout(navigate))
}




  return (
    // {user?.role === "admin"? <>
    // <button className='user-btn'>
      
    //   <Dropdown className="d-inline mx-2" autoClose="inside">
    //     <Dropdown.Toggle id="dropdown-autoclose-inside">
    //     <BiUser />
    //     </Dropdown.Toggle>

    //     <Dropdown.Menu>
    //       <Dropdown.Item href="/admin">Tableau de board</Dropdown.Item>
    //       <Dropdown.Item href="#" onClick={handleLogout}>Deconnecter</Dropdown.Item>
    //     </Dropdown.Menu>
    //   </Dropdown>
    //   </button><Admin /></>:<a className="login-btn" href='/SignIn'> S'identifier </a>}
    <>
    <p>
      <Typical
        steps={['Livraison Gratuit!', 1000, 'pour les achats qui depasse 100 DT', 1000]}
        loop={Infinity}
        wrapper="p"
      /> 
    </p>
    {/* {<a href="/admin">Admin</a>:<div></div>} */}
    {user?.role === "admin"? <button className='user-btn'>
      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
        <BiUser />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/admin">Admin</Dropdown.Item>
          <Dropdown.Item href="#" onClick={handleLogout}>Deconnecter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </button>:null}
    { (user?.email && user?.role ==="user")? <button className='user-btn'> 
      
      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
        <BiUser />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/favoris">Favoris</Dropdown.Item>
          <Dropdown.Item href="#" onClick={handleLogout}>Deconnecter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </button>:null}
    {!user?.email?<a className="login-btn" href='/SignIn'> S'identifier </a>:null } 
    <NavLink to={'/favoris'}>
    <button className='like-btn'><TfiHeart style={{fill:'red'}}/></button>
    </NavLink>
    <button className='shop-btn'><a href='/panier'><IoBagOutline /></a></button> 
    <header className="header">
        <a href="/" className="logo">CORNER</a>
        <nav className="nav">
           <NavLink to={'/Nouveautés'}>Nouveautés</NavLink>
           <NavLink to={'/Homme'}>Homme</NavLink>
           <NavLink to={'/Femme'}>Femme</NavLink>
           <NavLink to={'/Enfant'}>Enfant</NavLink>
           <div className="search-area">
           <BsSearch />
          <input type="text" placeholder="Rechercher" onChange={(e)=>setSearch(e.target.value)}></input>
           </div>                            
        </nav>
    </header>
    </>
       
  );
}

export default Navs;