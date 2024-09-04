import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import NotFound from "../pages/NotFound";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const day = new Date();
  const navigate = useNavigate();

  const apiKey = process.env.REACT_APP_API_KEY; // Weatherbit API anahtarınızı buraya ekleyin

  const handleSearch = async () => {
    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}`
      );

      if (!response.ok) {
        navigate("*");
        return;
      }

      const data = await response.json();
      const limitedData = { ...data, data: data.data.slice(0, 7) };
      setWeatherData(limitedData);
      setError(null);
      navigate("/search-results", { state: { weatherData: limitedData } });
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      navigate("*");
    }
  };

  return (
    <div className="relative mb-8 w-full">
      <input
        type="text"
        placeholder="Search a City"
        className="p-2 w-full border rounded-lg border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <IoIosSearch size={20} className="text-gray-400" />
      </span>
    </div>
  );
};

export default Search;
