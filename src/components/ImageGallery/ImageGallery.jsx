import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

function ImageGallery({ dataImg, onOpenModal, onSelectImage }) {
  return (
    <Gallery>
      {dataImg &&
        dataImg.map((image) => {
          return (
            <ImageGalleryItem
              key={image.id}
              imageItem={image}
              onOpenModal={onOpenModal}
              onSelectImage={onSelectImage}
            />
          );
        })}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  dataImg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onSelectImage: PropTypes.func.isRequired,
};

export default ImageGallery;
