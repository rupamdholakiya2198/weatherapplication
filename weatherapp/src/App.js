

// import React, { useState } from 'react';
// import './App.css'; 

// const API_KEY = "a1b9f731aa8f4047959104004252905"; 

// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const searchWeather = async () => {
//     if (!city.trim()) return;

//     setLoading(true);
//     setWeather(null);

//     try {
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
//       );

//       if (!response.ok) throw new Error("Invalid response");

//       const data = await response.json();
//       setWeather(data);
//     } catch (error) {
//       alert("Failed to fetch weather data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h2>Weather Application</h2>

//       <input
//         type="text"
//         value={city}
//         placeholder="Enter city name"
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={searchWeather}>Search</button>

      
//       <p id="loadingMessage">{loading ? 'Loading data…' : ''}</p>

//       {weather && (
//         <div className="weather-cards">
//           <div className="weather-card">
//             <h4>Temperature</h4>
//             <p>{weather.current.temp_c} °C</p>
//           </div>
//           <div className="weather-card">
//             <h4>Humidity</h4>
//             <p>{weather.current.humidity} %</p>
//           </div>
//           <div className="weather-card">
//             <h4>Condition</h4>
//             <p>{weather.current.condition.text}</p>
//           </div>
//           <div className="weather-card">
//             <h4>Wind Speed</h4>
//             <p>{weather.current.wind_kph} kph</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

const API_KEY = "Your_API_KEY"; // Replace with your actual API key

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      if (!response.ok) {
        throw new Error("Invalid city");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      {/* Search input and button */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Loading message exactly as required */}
      {loading && <p>Loading data…</p>}

      {/* Weather cards */}
      {weatherData && (
        <div className="weather-cards">
          <div className="weather-card">
            <strong>Temperature:</strong> {weatherData.current.temp_c} °C
          </div>
          <div className="weather-card">
            <strong>Humidity:</strong> {weatherData.current.humidity}%
          </div>
          <div className="weather-card">
            <strong>Condition:</strong> {weatherData.current.condition.text}
          </div>
          <div className="weather-card">
            <strong>Wind Speed:</strong> {weatherData.current.wind_kph} kph
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
