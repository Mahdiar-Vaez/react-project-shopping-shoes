import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";
import { useSelector } from "react-redux";
import './style.css'
export default function Navbar() {
  const { token, handleToken } = useContext(AuthContext);
  const productNum=useSelector(state=>state.cart.list).length
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to={"/"}>
          Logo
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link  " aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            {token ? (
              <li style={{color:'white'}} className="nav-item text-light bg-danger rounded-3  ">
                <span
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleToken(null)}
                >
                  Logout
                </span>
              </li>
            ) : (
              <li class="nav-item bg-success rounded-3 text-white">
                <Link class="nav-link text-white" to={"/login-register"}>
                  Login-Register
                </Link>
              </li>
            )}
            <li class="nav-item">
              <Link class="nav-link" to={"/products"}>
                products
              </Link>
            </li>
          </ul>
     
        </div>
        <Link to={'/cart'}>
        <box-icon className='cart-icon' name='cart'>
          </box-icon>
          {productNum !=0 &&<span className="span">{+productNum}</span>}
          </Link>
      </div>
    </nav>
  );
}
