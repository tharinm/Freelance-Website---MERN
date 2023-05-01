import React from "react";
import "./Reviews.scss";
import Review from "../review/Review";
import newRequest from "../../utils/newRequest.js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
//import toast, { Toaster, hottoast } from "react-hot-toast";

export default function Reviews({ gigId }) {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      //toast.error(error);
      alert(`An error occurred: ${error.message}`);
    },
  });

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const desc = e.target[0].value;
      const star = e.target[1].value;
      mutation.mutate({ gigId, desc, star });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(gigId);
  console.log(data);

  return (
    <div>
      <div className="reviews">
        <h2>Reviews</h2>
        {isLoading
          ? "Loading"
          : error
          ? "Something went wrong"
          : data.map((review) => {
              return <Review key={review._id} review={review} />;
            })}
        <div className="add">
          <h3>Add a review</h3>
          <form action="" className="addForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="write your opinion" />
            <select name="" id="">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
