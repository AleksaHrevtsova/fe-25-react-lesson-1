import React, { Component } from "react";
import axios from "axios";

import Gallery from "../../components/Gallery/Gallery";

import s from "./Home.module.css";

import x from "../../services/pexelsApi";
const { getFetch } = x;

class Home extends Component {
  state = {
    query: "moon",
    page: 1,
    formObject: null,
    gallery: [],
    msg: "",
  };

  async componentDidMount() {
    const { query, page } = this.state;
    const persistedData = JSON.parse(localStorage.getItem("gallery"));

    // console.log(persistedData);
    if (persistedData) {
      this.setState(() => ({ gallery: [...persistedData] }));
      return;
    }
    // ==== ЕСЛИ НЕ ИМПОРТИРОВАТЬ ИЗ ОТДЕЛЬНОГО ФАЙЛА =====
    let key = `563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af`;
    axios.defaults.baseURL = `https://api.pexels.com/v1`;
    axios.defaults.headers.common["Authorization"] = key;
    let url = `/search?query=${query}&per_page=6&page=${page}`;
    const response = await axios.get(url);
    const data = await response.data;
    const photos = await data.photos;
    this.setState({ gallery: [...photos] });
    // ==== ЕСЛИ НЕ ИМПОРТИРОВАТЬ ИЗ ОТДЕЛЬНОГО ФАЙЛА =====

    // getFetch(query, page).then((result) => {
    //   console.log(result);
    //   this.setState({ gallery: [...result] });
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`Я обновился`, this.state.query);
    const { query, page, gallery } = this.state;

    if (query !== prevState.query) {
      getFetch(query, page)
        .then((result) => {
          console.log(result);
          if (result.length) {
            this.setState((prev) => ({
              gallery: [...result],
            }));
          } else {
            this.setState({ msg: "Nothing to show by your request" });
            alert(this.state.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (gallery !== prevState.gallery) {
      // console.log(this.state.gallery);
      localStorage.setItem("gallery", JSON.stringify(this.state.gallery));
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
    console.log(query);
    this.setState({ query });
  };

  render() {
    const pathUrl = this.props.match.url;
    // console.log(pathUrl);
    const { gallery, msg } = this.state;
    const { getQuery } = this;
    return (
      <div className={s.home}>
        {/* <h1>Home</h1> */}
        {msg && <p>{msg}</p>}
        <Gallery gallery={gallery} pathUrl={pathUrl} getQuery={getQuery} />
      </div>
    );
  }
}

export default Home;
