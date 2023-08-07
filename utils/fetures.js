export async function fetures() {
  const data = await fetch("https://dummyjson.com/products");
  if (!data.ok) return new Error("data not fetched..");
  return await data.json();
}

export async function getDataByID(id) {
  const dataId = await fetch(`https://dummyjson.com/product/${id}`);
  if (!dataId.ok)
    return new Error("Data on particuylar prodiu=ucts is not fetched");
  return await dataId.json();
}
// https://dummyjson.com/posts
export async function getPostData(id) {
  const dataPostByID = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!dataPostByID.ok)
    return new Error("Data on particular id post is not fetched");
  //   return await dataPostByID.json();
  return await new Promise((reso) => {
    setTimeout(() => {
      reso(dataPostByID.json());
    }, 3000);
  });
}

export async function getAllPostData() {
  const dataPostByID = await fetch(`https://dummyjson.com/posts`);
  if (!dataPostByID.ok)
    return new Error("Data on particular id post is not fetched");
    return await dataPostByID.json();
  dataPostByID.json();
}
