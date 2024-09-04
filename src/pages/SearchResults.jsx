import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Search from "../components/Search";

const SearchResults = () => {
  const location = useLocation();
  const weatherData = location.state?.weatherData;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const fullDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);

    const dateParts = fullDate.split(", ");

    const formattedDate = dateParts[1] + ", " + dateParts[2];

    return formattedDate.trim();
  };

  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
  };

  return (
    <div className="flex justify-center p-8 w-full ">
      <div className="flex flex-col w-9/12 md:flex-row items-center md:space-x-12 ">
        {/* Sol tarafta */}
        <div className="flex flex-col border w-full border-2 rounded-lg mt-4">
          <h1 className="text-xl font-bold text-gray-600 p-4 border-b">
            Weather Forecast for {weatherData.city_name}
          </h1>

          <table className="min-w-full bg-white">
            <thead className="bg-gray">
              <tr>
                <td className="py-4 px-4 border-b border-r border-gray-200">
                  Days
                </td>
                <td className="py-4 px-4 border-b border-r border-gray-200">
                  Dates
                </td>
                <td className="py-4 px-4 border-b border-r border-gray-200">
                  Lowest Temp.
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  Highest Temp.
                </td>
              </tr>
            </thead>
            <tbody>
              {weatherData.data.map((day) => (
                <tr key={day.datetime}>
                  <td className="py-5 px-4 border-b border-r border-gray-200">
                    {formatDay(day.datetime)}
                  </td>
                  <td className="py-2 px-4 border-b border-r border-gray-200">
                    {formatDate(day.datetime)}
                  </td>
                  <td className="py-2 px-4 border-b border-r border-gray-200">
                    {Math.round(day.min_temp)}°C
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {Math.round(day.max_temp)}°C
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Sağ taraftaki arama ve metin */}
        <div className="flex flex-col h-full mt-8 w-7/12">
          {/* Arama Kutusu */}
          <div>
            <Search />
          </div>
          {/* Bilgilendirme Metni */}
          <div className="w-full">
            <div className="text-center p-10 bg-white rounded-lg border-2">
              <h1 className="text-6xl font-bold text-gray-500 mb-8">
                {Math.round(weatherData.data[0].temp)}°C
              </h1>
              <p className="text-4xl font-bold">{weatherData.city_name}</p>
              <p className="text-gray-800 text-center mt-3">
                {formatDate(weatherData.data[0].valid_date)}
              </p>
              <p className="text-gray-500 text-center mt-6 flex justify-center items-center gap-2">
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${weatherData.data[0].weather.icon}.png`}
                  alt={weatherData.data[0].weather.description}
                  className="h-10"
                />
                <span>{weatherData.data[0].weather.description}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
