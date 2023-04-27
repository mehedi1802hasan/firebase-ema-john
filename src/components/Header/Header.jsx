import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/Provider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogout=()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link className='mx-5' to="/registration">SignUp</Link>
                   {
                    user && <span className='text-red-500'>{user.email} <button onClick={handleLogout} className='btn btn-primary' >logOut</button></span>
                   }
            </div>
        </nav>
    );
};

export default Header;