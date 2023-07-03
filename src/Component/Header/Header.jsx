// import "./Header.css";






// import React from 'react'
// import { Link } from 'react-router-dom';


// function Header() {
//   return (
//     <>
//     <div className="navbar">
//   <ul>
//   <li><Link to="/Home">Home</Link></li>
//     <li><Link to="/Books">Books</Link></li>
//     <li><a href="#">Categories</a></li>
//     <li><Link to="/Postss">Post</Link></li>
//     <li><Link to="/About">About</Link></li>
//     <li><Link to="/Contact">ContactUs</Link></li>
   
    

//   </ul>
//   <ul>
//   <li><Link to="/Signup">Signup</Link></li>
//   <br>
//   </br>
//   <li><Link to="/Signin">Signin</Link></li>
  
//   </ul>
// </div>
  
  
//     </>
//   )
// }

// export default Header;




import "./Header.css";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function Header() {

  const userActive = sessionStorage.getItem("id");
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/Users/${userActive}`)
      .then((rep) => rep.json())
      .then((data) => setCart(data));
  }, [userActive]);

  let navlogout = useNavigate();


  const [isActive, setIsActive] = useState(false);

  
  function logout() {
    sessionStorage.clear();
    navlogout("/");
    setIsActive(false);
  }
  function logout() {
    sessionStorage.clear();
    setCart([]);
    setIsActive(false);
    navlogout("/");
  }

  const Dropdown = () => {
    if (userActive !== null) {
      const classAction = () => {
        setIsActive(!isActive);
      };

      return (
        <>
          <p className="m-0 me-2">{Cart.username}</p>

          <div className="drop-list me-3">
            <i
              className="fa-solid fa-sort-down drop-icon"
              onClick={classAction}
            ></i>
            <div className={`drop_menu ${isActive ? "activeOpen" : ""}`}>
             
              
              <Link to="/Signup"><a onClick={logout}>Logout</a></Link>
            </div>
          </div>
          
        </>
      );
    } else {
      return (
        <Link to="/Signin">
          <i className="fa-regular fa-user "></i>
        </Link>
      );
    }
  };

  return (
    <>
      <div className="Header container p-0">
        <nav className="navbar navbar-expand-lg d-flex justify-content-center">
          <div className="container-fluid p-0">
           
           
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
      <div className="navbar">
  <ul>
  <li><Link to="/Home">Home</Link></li>
    <li><Link to="/Books">Books</Link></li>
    
    <li><Link to="/Postss">Post</Link></li>
    <li><Link to="/About">About</Link></li>
    <li><Link to="/Contact">ContactUs</Link></li>
   
    

  </ul>
  {/* <ul>
  <li><Link to="/Signup">Signup</Link></li>
  <br>
  </br>git initgit init
  <li><Link to="/Signin">Signin</Link></li>
  
  </ul> */}
</div>

              <div className="nav-item d-flex  align-items-center">
                <Dropdown />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;





