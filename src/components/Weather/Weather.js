import React, { Component } from "react";
import api from "../../services/weatherApi";
import s from "./Weather.module.css";

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
    const { name, main, weather, wind } = data;
    console.log("main", main);
    console.log("weather", weather);

    return (
      <>
        {data && (
          <div className={s.card}>
            <form className={s.search} onSubmit={handleSumbit}>
              <input
                type="text"
                className={s.searchBar}
                placeholder="Search"
                onChange={handleChange}
                name="search"
                // value={search}
              />
              <h2 className={s.city}>Weather in {name}</h2>
            </form>
            <div className={s.weather}>
              <h1 className={s.temp}>{Math.round(main.temp)}°C</h1>
              <ul className={s.flex}>
                {weather.map((el) => {
                  console.log(el);
                  const { icon, description } = el;
                  return (
                    <li key={el.id}>
                      <img
                        src={`https://openweathermap.org/img/wn/${icon}.png`}
                        alt="icon"
                        className={s.icon}
                      />
                      <div className={s.description}>{description}</div>
                    </li>
                  );
                })}
              </ul>
              <p className={s.humidity}>Humidity: {main.humidity}%</p>
              <p className={s.wind}>Wind speed: {wind.speed} km/h</p>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Weather;
