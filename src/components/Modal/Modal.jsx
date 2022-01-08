import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Overlay, ModalContainer } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") this.props.onClose();
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) this.props.onClose();
  };

  render() {
    const { image } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <img src={image} alt="" />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
