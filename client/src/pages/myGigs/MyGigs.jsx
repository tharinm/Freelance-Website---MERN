import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";

export default function MyGigs() {
  return (
    <div className="myGigs">
      <div className="container">
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
              <img src="./img/delete.png" alt="" className="delete" />
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
              <img src="./img/delete.png" alt="" className="delete" />
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
              <img src="./img/delete.png" alt="" className="delete" />
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
              <img src="./img/delete.png" alt="" className="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
