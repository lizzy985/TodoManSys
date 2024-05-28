import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'

function HeaderComponent() {

  const isAuth = isUserLoggedIn();

  function handleLogout() {
    logout();
  }

  return (
    <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
              <a href="http://localhost:3000" className='navbar-brand'>Todo Management Application</a>
            </div>
  
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                {
                  isAuth &&    <li className='nav-item'>
                    {/* <button  onClick={Signup}>Sign up</button> */}
                    <NavLink to="/todos" className="nav-link">Todos</NavLink>
                  </li>
                }
                
              </ul>
              
            </div>

            <ul className='navbar-nav'>
              {
                !isAuth &&   <li className='nav-item'>
                    {/* <button  onClick={Signup}>Sign up</button> */}
                    <NavLink to="/register" className="nav-link">Sign up</NavLink>
                </li>
              }
                
              {
                !isAuth &&  <li className='nav-item'>
                  {/* <button  onClick={Signup}>Sign up</button> */}
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>
              }  

              {
                isAuth &&  <li className='nav-item'>
                  {/* <button  onClick={Signup}>Sign up</button> */}
                  <NavLink to="/login" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                </li>
              }  

 
            </ul>
        </nav>
    </div>
  )
}

export default HeaderComponent