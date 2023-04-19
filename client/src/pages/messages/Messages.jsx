import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

export default function Messages() {
  const currentUser = {
    id: 1,
    username: "John",
    isSeller: true,
  };

  const message = `Enim ad ullammmodo proide laborum eu minim.
   Ullamco id commodo nostruxercitation elit excepteur ad ullamco eu.`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doel</td>
            <td>
              <Link to="/message/125" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Rukie</td>
            <td>
              <Link to="/message/125" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Maxwell</td>
            <td>
              <Link to="/message/125" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Solaman</td>
            <td>
              <Link to="/message/125" className="link">
 
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
