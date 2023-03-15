import logo from './logo.svg';
import './App.css';
import L from "leaflet";

import {FeatureGroup,MapContainer,Marker,Polyline,TileLayer,Popup} from "react-leaflet";
import {useState} from "react";
import {useRef} from "react";
function GetMarkers(){
    let points = [[4.641665, -74.079349], [4.641394, -74.078254], [4.642113, -74.075944], [4.643443, -74.075709], [4.642472, -74.071809], [4.641838, -74.074495], [4.636002, -74.076334], [4.630265, -74.075242], [4.630229, -74.078454], [4.631515, -74.079979]]
    let markers= []
    for(let i = 0; i < points.length; i++){
        markers.push(
            <Marker position={points[i]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        )
    }
    return(
        markers
    )
}
function App() {

    const mapRef = useRef();
    const [center, setCenter] = useState({ lat: 36.460353, lng: 126.440674 });
    const [map, setMap] = useState(null);

    const pos = [
        [4.641665, -74.079349],
        [4.641394, -74.078254],
        [4.642463, -74.078188],
        [4.642113, -74.075944],
        [4.643443, -74.075709],
        [4.643077, -74.073731],
        [4.642472, -74.071809],
        [4.641411, -74.071993],
        [4.641838, -74.074495],
        [4.640811, -74.074685],
        [4.640923, -74.075483],
        [4.636002, -74.076334],
        [4.633979, -74.075386],
        [4.630265, -74.075242],
        [4.630229, -74.078454],
        [4.632291, -74.079348],
        [4.631515, -74.079979],
        [4.641665, -74.079349]
    ];

  return (
    <div className="App">
        <MapContainer center={[4.637199,-74.0765355]} zoom={16}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            <GetMarkers/>
            <FeatureGroup>


                <Polyline positions={pos} color="red"/>
            </FeatureGroup>

        </MapContainer>
    </div>
  );
}

export default App;
export const customMarkerUserPos = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [15, 20],
    iconAnchor: [5, 20],
    popupAnchor: [2, -40]
});

// icon={customMarkerUserPos}