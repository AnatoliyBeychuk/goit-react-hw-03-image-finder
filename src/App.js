import "./App.css";
import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import PixabayAPI from "./components/service/PixabayAPI";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";

class App extends Component {
  state = {
    images: [],
    query: "",
    showModal: false,
    selectedImage: null,
    status: "idle",
    error: null,
    total: 0,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSelectedImage = (url) => {
    this.setState({ selectedImage: url });
  };

  onSearch = (query) => {
    PixabayAPI.resetPage();
    this.loadImages(query);
    this.setState({ images: [], query });
  };

  onLoadMore = () => {
    PixabayAPI.nextPage();
    this.loadImages(this.state.query);
  };

  loadImages = (query) => {
    this.setState({ status: "pending" });
    PixabayAPI.load(query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error("Произошла ошибка :("));
      })
      .then((data) => {
        if (data.total === 0) {
          return Promise.reject(new Error("Ничего не найдено :("));
        }
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...data.hits],
            status: "resolved",
            total: data.total,
          };
        });
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  render() {
    const { images, showModal, selectedImage, status, error, total } =
      this.state;
    const hasNextPage = images.length === total;

    return (
      <>
        <Searchbar onSubmit={this.onSearch} />
        {status === "idle" && (
          <h1>Воспользуйтесь поиском, чтобы найти нужную картинку!</h1>
        )}
        <>
          <ImageGallery
            dataImg={this.state.images}
            onOpenModal={this.toggleModal}
            onSelectImage={this.handleSelectedImage}
          />
          {!hasNextPage && status === "resolved" && (
            <Button onClick={this.onLoadMore} />
          )}
          {showModal && (
            <Modal image={selectedImage} onClose={this.toggleModal} />
          )}
        </>
        {status === "rejected" && <h1>{error.message}</h1>}
        {status === "pending" && <Loader />}
      </>
    );
  }
}

export default App;
