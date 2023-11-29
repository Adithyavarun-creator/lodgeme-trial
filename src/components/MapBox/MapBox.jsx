import Map, { Marker, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox() {
  return (
    <>
      {/* <Map
        mapboxAccessToken="pk.eyJ1IjoiYWRpdGh5YTk1IiwiYSI6ImNscGsxMWtxYjA1czAyaXA3MndsNjViaGkifQ.ce8RjQ_84kY6y2Lhn6gA9w"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      <Marker longitude={viewport.longitude} latitude={viewport.latitude} /> */}
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
