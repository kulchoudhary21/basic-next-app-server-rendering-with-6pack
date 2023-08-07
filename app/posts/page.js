import React from "react";
import { getAllPostData } from "../../utils/fetures";
async function Post() {
  const data = await getAllPostData();
  console.log("data.........", data);
  return (
    <div>
      {data.posts.map((item, index) => {
        return <div key={index}>{item.title}</div>
      })}
    </div>
  );
}

export default Post;
