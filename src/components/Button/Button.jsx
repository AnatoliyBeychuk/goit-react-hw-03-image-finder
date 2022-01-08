import { ButtonLoadMore, Container } from "./Button.styled";
import PropTypes from "prop-types";

function Button({ onClick }) {
  return (
    <Container>
      <ButtonLoadMore onClick={onClick} type="button">
        Load more
      </ButtonLoadMore>
    </Container>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
