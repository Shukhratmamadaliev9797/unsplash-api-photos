import React from "react";
import ImageCard from "./ImageCard";
const ImgList = (props) => {
  console.log(props.images);
  const img = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="img__list">{img}</div>;
};

export default ImgList;
