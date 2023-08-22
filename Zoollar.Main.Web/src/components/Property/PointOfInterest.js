import { useMemo } from "react";
import {
  GoogleMap,
  MarkerF,
  StreetViewPanorama,
  useLoadScript,
} from "@react-google-maps/api";
import "./pointofinterest.css";
const googleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;

const PointOfInterst = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapKey,
  });

  const center = useMemo(() => ({ lat: 7.4192661, lng: 3.8761708 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : props.isEnabled ? (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={17}
        >
          <StreetViewPanorama options={{ position: center, visible: true }} />
          <MarkerF position={{ lat: 7.4192661, lng: 3.8761708 }} />
        </GoogleMap>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={17}
        >
          <MarkerF position={{ lat: 7.4192661, lng: 3.8761708 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default PointOfInterst;
