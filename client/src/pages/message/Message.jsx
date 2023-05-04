import React from "react";
import "./Message.scss";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function Message() {
  const { id } = useParams();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

   const mutation = useMutation({
     mutationFn: (message) => {
       return newRequest.post(`/messages`, message);
     },
     onSuccess: () => {
       queryClient.invalidateQueries(["messages"]);
     },
   });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  console.log(data);
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrums">
          <Link to="/messages" className="link">
            MESSAGES By JOHN
          </Link>
        </span>
        {isLoading ? (
          "Loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="mesages">
            {data.map((m) => (
              <div
                className={m.userId === currentUser._id ? "owner item" : "item"}
                key={m._id}
              >
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        {/* <div className="write"> */}
          <form className="write" onSubmit={handleSubmit}>
            <textarea
              name=""
              placeholder="write message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>Send</button>
          </form>
        {/* </div> */}
      </div>
    </div>
  );
}
