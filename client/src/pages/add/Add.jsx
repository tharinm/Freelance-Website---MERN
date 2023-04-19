import React from "react";
import "./Add.scss";

export default function Add() {
  return (
    <div>
      <div className="add">
        <div className="container">
          <h1>Add New Gig</h1>
          <div className="sections">
            <div className="left">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="e.g I will do something " />
              <label htmlFor="">Category</label>
              <select name="cats" id="cats">
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
              <label htmlFor="">Cover Image</label>
              <input type="file" />
              <label htmlFor="">Upload Image</label>
              <input type="file" multiple />
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="16"
                placeholder="Breifly explain your gig"
              ></textarea>
              <button>Create</button>
            </div>
            <div className="right">
              <label htmlFor="">Servic Title</label>
              <input type="text" placeholder="e.g One Page Web Design" />
              <label htmlFor="">Short Description</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="short description of your service"
              ></textarea>
              <label htmlFor="">Delivery Time (e.g 3 days)</label>
              <input type="number" min={1} />
              <label htmlFor="">Revision Number</label>
              <input type="number" min={1} />
              <label htmlFor="">Add Features</label>
              <input type="text" placeholder="e.g page Design" />
              <input type="text" placeholder="e.g File uploading" />
              <input type="text" placeholder="e.g settiing up domain" />
              <input type="text" placeholder="e.g hosting" />
              <label htmlFor="">Price</label>
              <input type="number" min={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
