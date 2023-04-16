import React, { useEffect, useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);
 // console.log(setActive);
  const [open,setOpen]=useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    //cleanup function
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "Tharindu",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to='/'> */}
          <span className="text">Freelance</span>
          {/* </Link> */}

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Explore Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png"
                alt=""
              />
              <span>{currentUser?.userName}</span>
          { open &&   <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <span>Gigs</span>
                    <span>Add New Gig</span>
                  </>
                )}
                <span>Orders</span>
                <span>Messages</span>
                <span> Logout</span>
              </div>}
            </div>
          )}
          <button>Join</button>
        </div>
      </div>

      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
          </div>
        </>
      )}
    </div>
  );
}
