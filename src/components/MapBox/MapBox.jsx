import Map, { Marker, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";

function Mapbox() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
      });
    });
  }, []);
  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYWRpdGh5YTk1IiwiYSI6ImNscGsxMWtxYjA1czAyaXA3MndsNjViaGkifQ.ce8RjQ_84kY6y2Lhn6gA9w"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      {/* <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      /> */}
      <Marker longitude={viewport.longitude} latitude={viewport.latitude} />
    </>
  );
}
export default Mapbox;

/**
 <Map
        mapboxAccessToken="pk.eyJ1IjoiYWRpdGh5YTk1IiwiYSI6ImNscGsxMWtxYjA1czAyaXA3MndsNjViaGkifQ.ce8RjQ_84kY6y2Lhn6gA9w"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
 */
