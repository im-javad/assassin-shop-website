import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const Map = () => {
  const starterPostion: LatLngExpression = [35.7001447, 51.3763083];
  const firstBranch: LatLngExpression = [35.7721635, 51.4148872];
  const secondBranch: LatLngExpression = [35.7032943, 51.3418557];
  const thirdBranch: LatLngExpression = [35.7480739, 51.3338092];

  return (
    <div className="contact-us-map flex flex-col mb-14">
      <div className="header mb-7 text-center">
        <h1 className="text-2xl">پیدا کردن روی نقشه</h1>
      </div>
      <div className="map w-full flex justify-center">
        <MapContainer
          center={starterPostion}
          zoom={10.5}
          className="h-[350px] w-full xl:w-2/3 rounded-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={firstBranch}>
            <Popup>Title is here .....</Popup>
          </Marker>
          <Marker position={secondBranch}>
            <Popup>Title is here .....</Popup>
          </Marker>
          <Marker position={thirdBranch}>
            <Popup>Title is here .....</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
