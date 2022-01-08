import React, { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
const Feed = () => {
  const [posts, Setpost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/posts/timeline/61d9e4dcf30f79837651f9bd"
      );
      console.log(res);
    };
    fetchPost();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
