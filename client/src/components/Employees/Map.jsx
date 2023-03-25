import React from 'react'
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import {Icon} from 'leaflet';
import "leaflet/dist/leaflet.css"
import "../../index.css"


const Map = (props) => {
  // console.log(props.add)
  
  const center = props.add;
    const customIcon = new Icon({
      iconUrl:"https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
      iconSize: [38,38]
    })
console.log(center)
  return (
    <div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributor'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map
