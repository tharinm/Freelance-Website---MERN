import React from "react";
import "./Features.scss";

export default function Features() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Take Your Business to the Next Level with Our <i>Freelance</i>{" "}
            Heroes
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder="Find Service" />
            </div>
            <button>Search</button>
          </div>
          <div className=" popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>AI Services</button>
            <button>SEO </button>
            <button>Logo Design</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}
