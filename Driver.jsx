import React from "react";
import googleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import Marker from "./Marker";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import style from "./home.module.css"

const Driver = ({ location, zoomLevel }) => {
  useEffect(() => {
    // Load the Google Maps JavaScript API script dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBIJx9uCI1vAYaPLrQgL5VYnjjZ4fdKmmw`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Initialize and render the map
    script.onload = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: zoomLevel,
      });

      // Add a marker to the map
      new window.google.maps.Marker({
        position: location,
        map: map,
      });
    };

    return () => {
      // Cleanup the Google Maps API script
      document.body.removeChild(script);
    };
  }, [location, zoomLevel]);
  let navigate=useNavigate();
  let handleAdd=(e)=>{
    navigate('/cus')
}

  return (
    <div id={style.dr}>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
      <button onClick={handleAdd}>Add customers</button>
      <button>Start Tracking</button>
      <button>Stop Tracking</button>
    </div>
  );
};
export default Driver 