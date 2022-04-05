import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user,logout}=useAuth();
  console.log(user)

  const activeStyle = {
    color: "#3FD0D4",
    fontWeight: "bold",
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-style" >
        <div className="container">
          <NavLink className="navbar-brand text-warning" to="/"><h4 >Holidays</h4></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link"  activeStyle={activeStyle} aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeStyle={activeStyle} to="packages">Packages</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeStyle={activeStyle} to="blog">Blog</NavLink>
              </li>
            </ul>
            {user?.email ?
                            <span className="navbar-text">
                                <span className='text-success'>{user?.displayName}</span>
                                <img className="rounded-circle ms-2" style={{ width: "40px" }} src={user.photoURL} alt="" />
                                <button onClick={logout} className="btn btn-warning ms-2">LogOut</button>
                            </span>
                            :
                            <span className="navbar-text">
                                <NavLink className="" aria-current="page" to='/login'><button className="btn btn-success">Login</button></NavLink>
                            </span>
                        }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;