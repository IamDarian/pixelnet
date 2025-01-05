import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Maps(props) {
  let customIcon = L.icon({
    iconUrl:
      "https://static.vecteezy.com/system/resources/previews/023/554/762/original/red-map-pointer-icon-on-a-transparent-background-free-png.png",

    iconSize: [45, 45],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      className="h-96 z-40"
      center={[props.latitude, props.longitude]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.latitude, props.longitude]} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
