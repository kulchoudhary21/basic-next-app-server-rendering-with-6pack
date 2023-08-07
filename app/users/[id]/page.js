import React, { Suspense } from "react";
import { getDataByID } from "../../../utils/fetures";
import Posts from "./posts";
import {notFound} from "next/navigation"
export async function generateStaticParams() {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];
}
export const generateMetadata = async ({ params }) => {
  console.log("params.....", params);
  const data = await getDataByID(params.id);
  return {
    title: `${data.title} 's data`,
  };
};
async function page({ params }) {
  console.log("ididid", params);
  const data = await getDataByID(params.id);
  if(!data.id) return notFound()
  return (
    <div>
      <p>{data?.title}</p>
      <img src={data?.thumbnail} alt="no image" />
      <p>{data?.description}</p>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Posts params={params} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
