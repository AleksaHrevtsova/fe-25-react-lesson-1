import React, { Component } from "react";
import api from "../../services/weatherApi";

import "./Weather.css";
// console.log(api);
// const d = api.getFetch().then((d) => console.log(d));

class Weather extends Component {
  state = {
    search: "Kyiv",
    data: "",
  };
  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.getData();
    }
  }

  getData = () => {
    const { search } = this.state;
    api.getFetch(search).then((d) => {
      this.setState({ data: d });
    });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    // console.log("form", e.target.elements.search);
    this.setState({ search: e.target.elements.search.value });
    e.target.elements.search.value = "";
  };

  render() {
    const { handleChange, handleSumbit } = this;
    const { data, search } = this.state;
    // console.log(data.main);

    return (
      <>
        {data && (
          <div className="card">
            <form className="search" onSubmit={handleSumbit}>
              <input
                type="text"
                className="searchBar"
                placeholder="Search"
                onChange={handleChange}
                name="search"
                // value={search}
              />
            </form>
            <div className="weather">
              <h2 className="city">Weather in {data.name}</h2>
              <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
              <div className="flex">
                <img
                  src="https://openweathermap.org/img/wn/04n.png"
                  alt=""
                  className="icon"
                />
                <div className="description">Cloudy</div>
              </div>
              <div className="humidity">Humidity: --%</div>
              <div className="wind">Wind speed: -- km/h</div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Weather;
