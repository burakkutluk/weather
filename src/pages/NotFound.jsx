import React from "react";
import Search from "../components/Search";
import notFound from "../assets/notFound.png";

const NotFound = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col md:flex-row items-center md:space-x-12 w-9/12">
        {/* Sol taraftaki görsel */}
        <div className="flex justify-center items-center w-full">
          <img src={notFound} alt="Not Found" />
        </div>
        {/* Sağ taraftaki arama ve metin */}
        <div className="flex flex-col h-full mt-8 w-6/12">
          {/* Arama Kutusu */}
          <Search />
          {/* Bilgilendirme Metni */}
          <div className="text-center p-10 bg-white rounded-lg border-2">
            <h1 className="text-3xl font-bold">Does not Exist</h1>
            <p className="text-gray-800 text-center mt-3">
              Type a valid city name to get weekly forecast data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
