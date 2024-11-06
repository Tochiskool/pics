import ImageShow from "../ImageShow";

const ImageList = ({ images }) => {
  const renderImages = images.map((image) => {
    return <ImageShow image={image} />;
  });
  return (
    <div>
      <h1> Number of Images : {images.length}</h1>
      <div>{renderImages}</div>
    </div>
  );
};

export default ImageList;
