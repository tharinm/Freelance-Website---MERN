import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
//import { gigs } from "../../data";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

export default function Gigs() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const minRef = useRef();
  const maxRef = useRef();

  // for search filterin
  const { search } = useLocation();
  

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      //gigs filtering
      newRequest
        .get(
          // `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`// `gigs${search}`
          `/gigs${search ? `${search}&` : "?"}min=${minRef.current.value}&max=${
            maxRef.current.value
          }&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    // console.log(minRef.current.value);
    // console.log(minRef.current.value);
    refetch();
  };

  useEffect(() => {
    refetch()
  },[sort])

  console.log(data);
  //console.log(gigs);

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
            <input type="text" placeholder="min" ref={minRef} />
            <input type="text" placeholder="max" ref={maxRef} />
            <button onClick={apply}>Apply</button>
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
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? " something went wrong"
            : data.map((gig) => {
                return <GigCard item={gig} key={gig._id} />;
              })}
        </div>
      </div>
    </div>
  );
}
