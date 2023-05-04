import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Features.scss";

export default function Features() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/gigs?search=${input}`);
    console.log(input);
  };

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
              <input
                type="text"
                placeholder="Find Service"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
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
