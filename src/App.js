import React, { useState } from "react";

const api = {
  key: "db5200cb2dcf5d2c069fc67958d782ef",
  base: "api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            
            <div className="weather-box">
              <div className="temp">{weather.main.temp}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : 
        <div>
            <div className="location-box">
              <div className="location">Lagos, NG</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            
            <div className="weather-box">
              <div className="temp">16°c</div>
              <div className="weather">Cloudy</div>
            </div>
          </div>
        }

      </main>

      <footer>Elozino Ovedhe</footer>
    </div>
  );
}

export default App;

// // const [query, setQuery] = useState("");
//   // const [weather, setWeather] = useState({});
//   // const urlEntry = "https://samples.openweathermap.org/data/2.5/weather?id=Lagos&appid=b1b15e88fa797225412429c1c50c122a1"
//   // //`${api.base}weather?q=${query}&units=metric&appid=${api.key}`;

//   // // const search = (evt) => {
//   // //   if (evt.key === "Enter") {
//   // //     fetch(urlEntry)
//   // //       .then((res) => res.json())
//   // //       .then((result) => {
//   // //         setWeather(result);
//   // //         setQuery("");
//   // //         console.log(result)
//   // //       })
//   // //       .catch(alert("Check Internet Connection"));
//   // //   }
//   // };

//   // return (
//   //   <div className="app">
//   //     <main>
//   //       <div className="location-box">
//   //         <div className="location">{weather.name}Lagos, NG</div>
//   //         <div className="date">{dateBuilder(new Date())}</div>
//   //       </div>

//   //       <div className="weather-box">
//   //         <div className="temp">28°c</div>
//   //         <div className="weather">Cloudy</div>
//   //       </div>
//   //     </main>

//   //     <footer>Elozino Ovedhe</footer>
//   //   </div>
// );
