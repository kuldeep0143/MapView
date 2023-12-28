import React, { useState } from "react";
import "./App.css";
import MapComponent from "./components/Map";
import Header from "./components/Header";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });
  return (
    <>
      <Header />
      <div className="h-[100vh] w-[100%]">
      <MapComponent selectedLocation={selectedLocation} />
      </div>
    </>
  );
}

export default App;
