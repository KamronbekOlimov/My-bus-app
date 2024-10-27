import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function Map() {
    const [lat, setLat] = useState(40.3842);
    const [lon, setLon] = useState(71.7843); 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            },
            (error) => {
                console.error("Geolocation error:", error);
            }
        );
    }, []);
    return (
        <MapContainer
            center={[lat, lon]}
            zoom={12}
            className="min-h-screen w-full -z-10 absolute top-0 left-0"
            attributionControl={false}
            zoomControl={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}
export default Map;