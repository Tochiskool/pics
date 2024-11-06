import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./util/API";
import ImageList from "./components/ImageList";
const App = () => {
  //Set state
  const [images, setImages] = useState([]);

  //Handles any search term from the search component
  const handleSubmit = async (term) => {
    //Seting search images to a result variable we
    //get a promise which means the result is still pending.
    //To result it we ask searchImages to wait using the await keyword
    //Then we set async in the begining of the defination of the function.
    const result = await searchImages(term);
    console.log(result);

    //Set state with the result which sets images equals to values from the result.
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
