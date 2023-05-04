import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";



export default function MyGigs() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));


  const queryClient = useQueryClient();

   const { isLoading, error, data } = useQuery({
     queryKey: ["mygigs"],
     queryFn: () =>
       newRequest.get(`/gigs?userId?{currentUser.id}`).then((res) => {
         return res.data;
       }),
   });
  
   const mutation = useMutation({
     mutationFn: (id) => {
       return newRequest.delete(`/gigs/${id}`);
     },
     onSuccess: () => {
       queryClient.invalidateQueries(["mygigs"]);
     },
   });
  
  const handleDelete = (id) => {
    mutation.mutate(id)
  }

  return (
    <div className="myGigs">
      {isLoading ? "Loading" : error ? "Something went wrong" :<div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" className="link">
            <button> Add New gig </button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          {data.map((gig) => {
            return (
             <tr key={gig._id}>
               <td>
                 <img
                   src={gig.cover}
                   alt=""
                   className="img"
                 />
               </td>
               <td>{gig.title}</td>
                <td>{ gig.price}</td>
                <td>{gig.sales}</td>
               <td>
                 <img
                   src="./img/delete.png"
                   alt=""
                   className="delete"
                    onClick={() => 
                      handleDelete(gig._id)
                    }
                 />
               </td>
             </tr>)
          })}
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        </table>
      </div>}
    </div>
  );
}
