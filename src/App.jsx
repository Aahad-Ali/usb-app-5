// import logo from './logo.svg';
import { useState } from "react";
import moment from "moment"
import "./App.css";
import axios from "axios";

function App() {
  const [cityName, setCityName] = useState("");

  const getNews = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: cityName,
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "058ef98b74msh3901c614803d0e2p13d2efjsne80ec4e4d871",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Latest News:
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-3" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3">About</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* ======================================================================================= */}
      <form onSubmit={getNews}>
        <input
          class="form mx-9"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button type="submit" class="btn btn-primary mx-3">
          Get News
        </button>
      </form>
    </div>
  );
}

export default App;
