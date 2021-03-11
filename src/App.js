import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import Header from "./components//Header/Header";
import Navigation from "./components//Navigation/Navigation";

import Main from "./components//Main/Main";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";

import Footer from "./components/Footer/Footer";

import database from "./db/db.json";
import links from "./db/nav.json";

import getGalleryItems from "./services/pexelsApi";
const { getFetch } = getGalleryItems;

// console.log(links);

const style = {
  background: "green",
};

// console.log("gallery json: ", gallery);

class App extends Component {
  state = {
    query: "moon",
    page: 1,
    formObject: null,
    gallery: [],
  };

  componentDidMount() {
    const { query, page } = this.state;
    getFetch(query, page)
      .then((result) => {
        // console.log(result);
        this.setState({ gallery: [...result] });
      })
      .catch((err) => {});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    return nextState.gallery !== this.state.gallery;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`Я обновился`);
    const { query, page } = this.state;
    if (query !== prevState.query) {
      getFetch(query, page)
        .then((result) => {
          console.log(result);
          // this.setState({ gallery: [...result] });
          this.setState((prev) => ({ gallery: [...prev.gallery, ...result] }));
        })
        .catch((err) => {});
    }
  }
  
  componentWillUnmount() {
    console.log(`Я пошел спать`);
  }

  getFormObject = (obj) => {
    this.setState({
      formObject: obj,
    });
  };

  getQuery = (query) => {
    this.setState({ query });
  };

  render() {
    const { gallery } = this.state;
    const { getQuery } = this;
    return (
      <div className="App">
        <Header>
          <Navigation links={links} />
        </Header>
        <Main db={database}>
          <Gallery gallery={gallery} getQuery={getQuery} />
          {/* <Contacts myProps="Hello" getFormObject={this.getFormObject} /> */}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
