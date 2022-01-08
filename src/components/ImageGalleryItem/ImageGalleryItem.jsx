import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

function ImageGalleryItem({ imageItem, onOpenModal, onSelectImage }) {
  return (
    <GalleryItem
      onClick={(event) => {
        onSelectImage(imageItem.largeImageURL);
        onOpenModal();
      }}
    >
      <GalleryItemImage src={imageItem.webformatURL} alt={imageItem.tags} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  imageItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onSelectImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
