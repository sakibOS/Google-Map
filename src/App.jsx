import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from 'google-map-react';
import './App.css'
import { googleAPIKey } from './googleAPIKey';
const AnyReactComponent = ({ text }) => <div style={{color:'red'}}><FaMapMarkerAlt />{text}</div>;

function App() {
  const defaultProps = {
    center: {
      lat:23.810331,
      lng: 90.412521
    },
    zoom: 15
  };

  return (
    <>
      <div style={{ height: '500px', width: '1000px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:googleAPIKey}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
      
    </>
  )
}

export default App
