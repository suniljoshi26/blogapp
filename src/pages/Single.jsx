import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const Single = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();

  const handleClick = () => {};
  const postId = location.pathname.split("/")[2];
  console.log("postId", postId);
  const { currentUser } = useContext(AuthContext);
  console.log(post);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/posts/${postId}`
        );
        setPost(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fatchData();
  }, [postId]);
  return (
    <div className="single">
      <div className="content">
        <img src={post.img} />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

          <div className="info">
            <span>{post.username}</span>
            <p> Posted {moment(post.date).fromNow()}</p>
          </div>
          {/* {currentUser.username === post.username && ( */}
          <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <AiOutlineEdit />
              {/* <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}
            </Link>
            {/* <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}

            <AiOutlineDelete onClick={handleClick} />
            {/* <img
                
                src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              /> */}
          </div>
          {/* )} */}
        </div>
        <h1>{post.title}</h1>
        <p>{post.des}</p>
      </div>
      <div className="menu">
        <Menu cat={post.cat} />
      </div>
    </div>
  );
};

export default Single;
