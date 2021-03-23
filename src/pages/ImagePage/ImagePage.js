import React, { Component } from "react";
import s from "./ImagePage.module.css";

class ImagePage extends Component {
  state = {
    image: null,
  };

  componentDidMount() {}

  handleBack = () => {
    const { state } = this.props.location;
    const { history } = this.props;
    // console.log(history);
    if (state && state.from) {
      history.push(state.from);
      return;
    }
    history.push("/");
  };

  render() {
    const { handleBack } = this;
    console.log(this.props.match.params);
    return (
      <>
        <button className={s.btn} onClick={handleBack} type="button">
          go Back
        </button>
        <h1>image page</h1>
        {/* <GalleryItem /> */}
      </>
    );
  }
}
export default ImagePage;
