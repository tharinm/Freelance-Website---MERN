import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

export default function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrums">
          <Link to="/messages" className="link">
            MESSAGES By JOHN
          </Link>
        </span>
        <div className="mesages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Do mollit ad ea esse ex Lorem. Sint consectet ur ipsum voluptate
              cillum commodo irure cupidatat ani ur laboris Lorem quis cillum
              exercitation cupidatat cupidatat velit minim occaecat nisi
              laborum.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Do mollit ad ea esse ex Lorem. Sint consectet ur ipsum voluptate
              cillum commodo irure cupidatat ani ur laboris Lorem quis cillum
              exercitation cupidatat cupidatat velit minim occaecat nisi
              laborum.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Do mollit ad ea esse ex Lorem. Sint consectet ur ipsum voluptate
              cillum commodo irure cupidatat ani ur laboris Lorem quis cillum
              exercitation cupidatat cupidatat velit minim occaecat nisi
              laborum.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Do mollit ad ea esse ex Lorem. Sint consectet ur ipsum voluptate
              cillum commodo irure cupidatat ani ur laboris Lorem quis cillum
              exercitation cupidatat cupidatat velit minim occaecat nisi
              laborum.
            </p>
          </div>
        </div>
        <hr/>
        <div className="write">
          <textarea
            name=""
            placeholder="write message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
