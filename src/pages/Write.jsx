import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  // const [img, setImg] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [file, setFile] = useState(null);
  console.log(value);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:8000/api/upload",
        formData
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = upload();
    try {
    } catch (error) {}
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility</b> Public
          </span>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="art"
              id="art"
              chacked={cat === "art"}
              onChange={(e) => setCat(e.target.value)}
            />

            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="science"
              id="science"
              chacked={cat === "science"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="technology"
              id="technology"
              chacked={cat === "technology"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
              chacked={cat === "cinema"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="desing"
              id="desing"
              chacked={cat === "desing"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="desing">Desing</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="food"
              id="food"
              chacked={cat === "food"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
