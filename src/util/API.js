import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization:
        "Client-ID 0a775ad719dc9d73fd392e25c4e0aa1cfccf19faa6eef6642d672411a32f6c47",
    },
    params: {
      query: term,
    },
  });
  //Console log response just for verification
  console.log(response);
  //Better we return more specifically the result we need
  console.log(response.data.results);
  return response;
};

export default searchImages;
