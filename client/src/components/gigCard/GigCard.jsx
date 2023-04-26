import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

export default function GigCard({ item }) {
  console.log(item)
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      //to get use name for display in gig
      newRequest.get(`/user/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

 //console.log(data)

  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            " loading"
          ) : error ? (
            "Something error in gig"
          ) : (
            <div className="user">
              <img src={data.img || 'img/man.png'} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
