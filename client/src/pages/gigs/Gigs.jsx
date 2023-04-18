import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

export default function Gigs() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  console.log(gigs);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FREELANCE GRAPHIC & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Transforming your vision into art with AI precision - Hire an AI
          artist today!
        </p>
        <div className="menu">
          <div className="left">
            <span className="budget">Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => {
            return <GigCard item={gig} key={gig.id} />;
          })}

          <GigCard item={gigs[0]}/>
        </div>
      </div>
    </div>
  );
}
