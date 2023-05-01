import React from "react";
import "./Reviews.scss";
import Review from "../review/Review";
import newRequest from "../../utils/newRequest.js";
import { useQuery } from "@tanstack/react-query";

export default function Reviews({gigId}) {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/single/{$gigId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div>
      <div className="reviews">
        <h2>Reviews</h2>
        {isLoading ? "Loading" : error ? "Something went wrong" :

          data.map((review)=>{
            <Review key={gigId} review={review} />
          })
        }
      </div>
    </div>
  );
}
