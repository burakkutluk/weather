import React, { useState } from "react";
import location from "../assets/location.png";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col md:flex-row items-center md:space-x-12 w-9/12">
        {/* Sol taraftaki görsel */}
        <div className="flex justify-center items-center w-full">
          <img src={location} alt="Location" />
        </div>
        {/* Sağ taraftaki arama ve metin */}
        <div className="flex flex-col h-full mt-8 w-6/12">
          {/* Arama Kutusu */}
          <Search />
          {/* Bilgilendirme Metni */}
          <div className="text-center p-10 bg-white rounded-lg border-2 ">
            <h1 className="text-3xl font-bold">Select a City</h1>
            <p className="text-gray-800 text-center mt-3">
              Search and select a city to see results. Try typing the first
              letters of the city you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
