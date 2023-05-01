import React from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";


export default function Review({ review }) {
  console.log(review);

  const { isLoading:isLoadingUser, error:userError, data:userData } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/reviews/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  // console.log(userData)
  return (
    <div className="review">
      <div className="item">
        <div className="user">
          {isLoadingUser ? (
            "Loading"
          ) : userError ? (
            "Something error"
          ) : (
            <img className="pp" src={userData.img} alt="" />
          )}

          <div className="info">
            {isLoadingUser ? (
              "Loading"
            ) : userError ? (
              "Something error"
            ) : (
              <span>{userData.username}</span>
            )}

            <div className="country">
              <img
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                alt=""
              />
              <span>United States</span>
            </div>
          </div>
        </div>
        <div className="stars">
          {Array(review.star)
            .fill()
            .map((item, i) => (
              <img src="/img/star.png" alt="" key={i} />
            ))}
          <span>{ review.star}</span>
        </div>

        <p>{review.desc}</p>
        <div className="helpful">
          <span>Helpful?</span>
          <img src="/img/like.png" alt="" />
          <span>Yes</span>
          <img src="/img/dislike.png" alt="" />
          <span>No</span>
        </div>
      </div>
    </div>
  );
}
