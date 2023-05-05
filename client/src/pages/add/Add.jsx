import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducer/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const queryClient = useQueryClient();
  const [singlefile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeatures = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_FEATURE", payload: e.target[0].value });
    e.target[0].value = "";
  };

  //console.log(state.features);
  //file upload
  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singlefile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_FEATURE", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(state);

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs/", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGig"]);
    },
    onError: (error) => {
      //toast.error(error);
      alert(`An error occurred: ${error.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    //navigate("/mygigs");
  };

  return (
    <div>
      <div className="add">
        <div className="container">
          <h1>Add New Gig</h1>
          <div className="sections">
            <div className="left">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                placeholder="I e.g will do something "
                onChange={handleChange}
              />
              <label htmlFor="">Category</label>
              <select name="cat" id="cats" onChange={handleChange}>
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
              <div className="images">
                <div className="imagesInput">
                  <label htmlFor="">Cover Image</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      setSingleFile(e.target.files[0]);
                    }}
                  />
                  <label htmlFor="">Upload Images</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => {
                      setFiles(e.target.files);
                    }}
                  />
                </div>
                <button onClick={handleUpload}>
                  {uploading ? "uploading" : "Upload"}
                </button>
              </div>
              <label htmlFor="">Description</label>
              <textarea
                name="desc"
                id=""
                cols="30"
                rows="16"
                placeholder="Breifly explain your gig"
                onChange={handleChange}
              ></textarea>
              <button onChange={handleSubmit}>Create</button>
            </div>
            <div className="right">
              <label htmlFor="">Service Title</label>
              <input
                type="text"
                placeholder="e.g One Page Web Design"
                onChange={handleChange}
                name=" shortTitle"
              />
              <label htmlFor="">Short Description</label>
              <textarea
                onChange={handleChange}
                name="shortDesc"
                id=""
                cols="30"
                rows="10"
                placeholder="short description of your service"
              ></textarea>
              <label htmlFor="">Delivery Time (e.g 3 days)</label>
              <input
                type="number"
                min={1}
                name="deliveryTime"
                onChange={handleChange}
              />
              <label htmlFor="">Revision Number</label>
              <input
                type="number"
                min={1}
                onChange={handleChange}
                name="revisionNumber"
              />
              <label htmlFor="">Add Features</label>
              <form action="" onSubmit={handleFeatures}>
                <input type="text" placeholder="e.g page Design" />
                <button type="submit">Add</button>
              </form>
              <div className="add">
                <div className="addedFeatures">
                  {state?.features?.map((f) => {
                    return (
                      <div className="item" key={f}>
                        <button
                          onClick={() =>
                            dispatch({ type: "REMOVE_FEATURE", payload: f })
                          }
                        >
                          {f}
                          <span> X </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <label htmlFor="">Price</label>
              <input type="number" min={1} name="price" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
