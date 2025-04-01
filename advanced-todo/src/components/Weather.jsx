import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../features/weatherSlice";

const Weather = () => {
  const [city, setCity] = useState("New Delhi"); // Default city
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector((state) => state.weather);

  const handleFetchWeather = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold">🌦 Weather Info</h2>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border rounded-md w-full mt-2"
      />
      <button
        onClick={handleFetchWeather}
        className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full hover:bg-blue-600"
      >
        Get Weather
      </button>

      {loading && <p className="text-gray-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {weather && (
        <div className="mt-4 text-gray-700">
          <p>📍 {weather.name}, {weather.sys.country}</p>
          <p>🌡 Temp: {weather.main.temp}°C</p>
          <p>☁ {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;