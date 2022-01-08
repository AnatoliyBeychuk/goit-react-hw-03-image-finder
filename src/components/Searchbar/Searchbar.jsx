import { Component } from "react";
import PropTypes from "prop-types";
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./Searchbar.styled";

class Searchbar extends Component {
  state = { query: "" };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <Header>
        <SearchForm
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(this.state.query);
          }}
        >
          <SearchFormButton
            type="submit"
            aria-label="Search"
          ></SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

export default Searchbar;
