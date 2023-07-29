import React from "react";

function ImageItem({ image }) {
  console.log(image);
  return (

      <div className="col-3 my-3">
        <div className="card">
          <img className="heightImg" src={image.urls.small} alt={image.alt_description} />
        </div>
      </div>
  );
}

export default ImageItem;
