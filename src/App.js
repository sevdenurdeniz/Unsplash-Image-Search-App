import "./App.css";
import SearchHeader from "./SearchHeader.js";
import searchImages from "./api.js"
import { useState } from "react";
import ImagesList from "./components/ImagesList.js";

function App() {
 
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    ///term yerine ne yazarsan yaz parametrenin değerine eşit
   const result=await searchImages(term);
   setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImagesList imagesPlaceholder={images}/> 
    </div>
  );
}

export default App;