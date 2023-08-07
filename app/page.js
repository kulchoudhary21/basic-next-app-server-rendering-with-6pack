import React from "react";
import { fetures } from "@/utils/fetures";
import Link from "next/link";

export async function metadata(){
    return {
        title:'users'
    }
}
async function page() {
  const data = await fetures();
  return (
    <div>
      {data?.products.map((item, index) => (
        <div key={index} style={{ display: "flex", margin: "10px" }}>
          <p>{item.title}</p>
          <img src={item.thumbnail} style={{ width: "20%" }} alt="image"></img>
          <Link href={`users/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default page;
