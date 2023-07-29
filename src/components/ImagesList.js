import ImageItem from './ImageItem.js';
import React from "react";
function ImagesList({ imagesPlaceholder }) {
  return (
    <div className='container'>
      <div className='row'>
      {imagesPlaceholder.map((image,index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
    </div>
  );
}

export default ImagesList;

 
