import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression, LatLngBoundsExpression } from "leaflet";

interface MapProps {
    latitude: number | null;
    longitude: number | null;
}

function ChangeView({ center, zoom }: { center: LatLngExpression, zoom: number }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

function Map({ latitude, longitude }: MapProps) {
    const southWest: LatLngExpression = [27.0, -19.0];
    const northEast: LatLngExpression = [44.0, 5.0];
    const spainBounds: LatLngBoundsExpression = [southWest, northEast];

    const defaultPosition: LatLngExpression = [40.416775, -3.703790];
    const initialZoom = 5;

    const currentPosition: LatLngExpression = latitude !== null && longitude !== null ? [latitude, longitude] : defaultPosition;
    const currentZoom = latitude !== null && longitude !== null ? 13 : initialZoom; // Zoom más cercano si hay coords específicas

    return (
        <MapContainer
            center={currentPosition}
            zoom={currentZoom}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
            maxBounds={spainBounds}
            minZoom={4}
            maxBoundsViscosity={1.0}
        >
            <ChangeView center={currentPosition} zoom={currentZoom} />

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {latitude !== null && longitude !== null && (
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        Ubicación buscada. <br /> Lat: {latitude}, Lon: {longitude}
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
}

export default Map;