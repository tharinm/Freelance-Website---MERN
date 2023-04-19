import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";

export default function Orders() {
  const currentUser = {
    id: 1,
    username: "John",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn.pixabay.com/photo/2023/02/06/10/57/ai-generated-7771756_960_720.jpg"
                alt=""
                className="img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="./img/message.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn.pixabay.com/photo/2023/02/06/10/57/ai-generated-7771756_960_720.jpg"
                alt=""
                className="img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="./img/message.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn.pixabay.com/photo/2023/02/06/10/57/ai-generated-7771756_960_720.jpg"
                alt=""
                className="img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="./img/message.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn.pixabay.com/photo/2023/02/06/10/57/ai-generated-7771756_960_720.jpg"
                alt=""
                className="img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="./img/message.png" alt="" className="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
