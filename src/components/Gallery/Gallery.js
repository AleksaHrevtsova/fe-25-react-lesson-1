import React, { Component } from "react";
import s from "./Gallery.module.css";
import { Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Modal from "../Modal/Modal";
import GalleryItem from "../GalleryItem/GalleryItem";
import PropTypes from "prop-types";

class Gallery extends Component {
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
    const { gallery, location } = this.props;
    const { pathname } = this.props.location;

    const { toggleModal, handleChange, handleSubmit, getElem } = this;
    const { showModal, queryValue, elem } = this.state;
    console.log(this.props.location);
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
              {gallery.map((el) => {
                // console.log(el);
                return (
                  <li key={el.id}>
                    {/* <Link to={`/${el.id}`}> */}
                    <Link
                      to={{
                        pathname: `/${el.id}`,
                        state: { from: location },
                      }}
                    >
                      <GalleryItem
                        // key={el.id}
                        el={el}
                        // getElem={getElem}
                        onMouseMove={() => getElem(el)}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default withRouter(Gallery);

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  getQuery: PropTypes.func,
};
