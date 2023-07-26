import React, { useRef } from 'react';
import { GoogleMap, StandaloneSearchBox } from '@react-google-maps/api';

const MapComponent: React.FC = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

  const handlePlaceSelect = () => {
    if (searchBoxRef.current?.getPlaces()?.length) {
      const place = searchBoxRef.current.getPlaces()?.[0];
      console.log('Selected Place:', place);
    }
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <StandaloneSearchBox
        onLoad={(ref) => (searchBoxRef.current = ref)}
        onPlacesChanged={handlePlaceSelect}
      >
        <input type="text" placeholder="Enter location..." />
      </StandaloneSearchBox>
    </GoogleMap>
  );
};

export default MapComponent;
