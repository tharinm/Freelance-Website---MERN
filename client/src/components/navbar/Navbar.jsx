import React, { useEffect, useState } from "react";
import "./Navbar.scss";

export default function Navbar() {

  const [active, setActive] = useState(false);
  console.log(setActive)

  const isActive = () =>
  {
    window.scrollY>0 ?setActive(true):setActive(false)
    }

  useEffect(() => {
    window.addEventListener('scroll', isActive);
      return () => {
        window.removeEventListener('scroll',isActive)
      }
  },[])

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
          <span>Become a Seller</span>
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
