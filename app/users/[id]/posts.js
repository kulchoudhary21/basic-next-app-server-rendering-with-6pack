import React from "react";
import { getPostData } from "../../../utils/fetures";
// export async function generateMetaData({params}){
//     console.log("params",params)
//     const datapost = await getPostData(params.id);
//     console.log("datapost/././././",datapost.title)
//     return {
//         title:`${datapost.id} 's data`
//     }
// }

async function Posts({ params }) {
  const datapost = await getPostData(params.id);
  console.log("data....", datapost);
  return (
    <div>
      {datapost.tags?.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default Posts;
