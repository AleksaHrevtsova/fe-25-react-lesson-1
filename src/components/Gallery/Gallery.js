import React, { Component } from "react";
import s from "./Gallery.module.css";
import { Form } from "react-bootstrap";
import Modal from "../Modal/Modal";
import GalleryItem from "../GalleryItem/GalleryItem";
import PropTypes from "prop-types";

class Gallery extends Component {
  // static propTypes = {
  //   gallery: PropTypes.arrayOf(PropTypes.object),
  //   getQuery: PropTypes.func,
  // };

  state = {
    showModal: false,
    queryValue: "",
    elem: null,
  };

  toggleModal = () => {
    // console.log(`toggle`);
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  handleChange = (e) => {
    // console.log(e.target.value);
    // this.setState((prev) => ({ queryValue: e.target.value }));
    this.setState({ queryValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { getQuery } = this.props;
    getQuery(this.state.queryValue);
    console.log(e.target.elements.query.value);
    // e.target.elements.query.value = "";
    this.state.queryValue = "";
  };
  getElem = (elem) => {
    this.toggleModal();
    this.setState({ elem });
  };
  render() {
    const { gallery } = this.props;
    const { toggleModal, handleChange, handleSubmit, getElem } = this;
    const { showModal, queryValue, elem } = this.state;
    return (
      <>
        <section className={s.gallery}>
          <div className="container">
            {showModal && (
              <Modal toggleModal={toggleModal}>
                <img src={elem.src.original} alt="img" />
              </Modal>
            )}
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Search..."
                    name="query"
                    onChange={handleChange}
                    value={queryValue}
                  />
                  <br />
                </Form.Group>
              </Form>
            </div>
            <ul className={s.galleryList}>
              {gallery.map((el) => (
                <GalleryItem key={el.id} el={el} getElem={getElem} />
              ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default Gallery;

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  getQuery: PropTypes.func,
};
